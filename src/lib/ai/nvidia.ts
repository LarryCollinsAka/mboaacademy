import axios from "axios";
import { loadSystemPrompt } from "./prompt-loader";
import type { AIFeature, PromptContext } from "./prompt-types";

const invokeUrl = "https://integrate.api.nvidia.com/v1/chat/completions";
const model = process.env.NVIDIA_MODEL ?? "google/gemma-4-31b-it";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type GenerateOptions = {
  maxTokens?: number;
  temperature?: number;
};

async function callNvidia(messages: ChatMessage[], options?: GenerateOptions): Promise<string> {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) throw new Error("NVIDIA_API_KEY is not configured.");

  const response = await axios.post(
    invokeUrl,
    {
      model,
      messages,
      max_tokens: options?.maxTokens ?? 1024,
      temperature: options?.temperature ?? 0.5,
      top_p: 1,
      stream: false,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      timeout: 60_000,
    },
  );

  const content = response.data?.choices?.[0]?.message?.content;
  if (typeof content !== "string" || !content.trim()) {
    throw new Error("NVIDIA returned an empty AI response.");
  }
  return content.trim();
}

/** Existing low-level API retained for backwards compatibility. */
export async function generateAIResponse(
  messages: ChatMessage[],
  options?: GenerateOptions,
): Promise<string> {
  return callNvidia(messages, options);
}

/** Preferred API for app features: loads the academy prompt and a feature prompt. */
export async function generateFeatureResponse(
  feature: AIFeature,
  userMessage: string,
  context: PromptContext = {},
  options?: GenerateOptions,
): Promise<string> {
  if (!userMessage.trim()) throw new Error("A user message is required.");
  const systemPrompt = await loadSystemPrompt(feature, context);
  return callNvidia(
    [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    options,
  );
}
