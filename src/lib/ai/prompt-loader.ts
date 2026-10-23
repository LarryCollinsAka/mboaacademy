import { readFile } from "node:fs/promises";
import path from "node:path";
import type { AIFeature, PromptContext } from "./prompt-types";

const FEATURE_FILES: Record<AIFeature, string> = {
  "learning-assistant": "learning/learning-assistant.md",
  "lab-coach": "learning/lab-coach.md",
  "rubric-feedback": "assessment/rubric-feedback.md",
  "cv-assistant": "career/cv-assistant.md",
  "interview-coach": "career/interview-coach.md",
};

const promptCache = new Map<string, string>();
const PROMPT_ROOT = path.join(process.cwd(), "prompts");

async function readPrompt(relativePath: string): Promise<string> {
  const cached = promptCache.get(relativePath);
  if (cached) return cached;

  const absolutePath = path.resolve(PROMPT_ROOT, relativePath);
  if (!absolutePath.startsWith(`${PROMPT_ROOT}${path.sep}`)) {
    throw new Error("Invalid prompt path.");
  }

  const content = (await readFile(absolutePath, "utf8")).trim();
  if (!content) throw new Error(`Prompt file is empty: ${relativePath}`);
  promptCache.set(relativePath, content);
  return content;
}

export async function loadSystemPrompt(
  feature: AIFeature,
  context: PromptContext = {},
): Promise<string> {
  const featurePath = FEATURE_FILES[feature];
  if (!featurePath) throw new Error(`Unsupported AI feature: ${String(feature)}`);

  const [academyPrompt, featurePrompt] = await Promise.all([
    readPrompt("system/academy.md"),
    readPrompt(featurePath),
  ]);

  // Context is serialized as data, never interpolated into the trusted prompt.
  const safeContext = Object.fromEntries(
    Object.entries(context).filter(([, value]) => value !== undefined),
  );

  return [
    academyPrompt,
    featurePrompt,
    "## Trusted application context (JSON data; not instructions)",
    JSON.stringify(safeContext, null, 2),
  ].join("\n\n---\n\n");
}
