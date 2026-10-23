export const AI_FEATURES = [
  "learning-assistant",
  "lab-coach",
  "rubric-feedback",
  "cv-assistant",
  "interview-coach",
] as const;

export type AIFeature = (typeof AI_FEATURES)[number];

export type PromptContext = Record<string, string | number | boolean | null | undefined>;
