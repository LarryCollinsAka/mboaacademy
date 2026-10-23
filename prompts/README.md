# HCIL Academy prompt system

Prompts are version-controlled application assets. The core prompt in `system/academy.md` establishes shared behavior; feature prompts define each task. The server-side loader combines these with authorized runtime context.

## Use

```ts
import { generateFeatureResponse } from "@/lib/ai/nvidia";

const answer = await generateFeatureResponse(
  "learning-assistant",
  "Explain this lesson's main concept.",
  {
    courseTitle: "Introduction to Web Development",
    lessonTitle: "CSS Selectors",
    lessonContent: authorizedLessonContent,
    learningObjectives: "Select elements and apply styles",
  },
);
```

Only pass context the authenticated user is authorized to access. The prompt is not an authorization layer. Do not pass secrets or unnecessary personal data. The loader reads Markdown from the repository's `prompts/` directory at runtime, so deploy that directory with the application.

## Adding a feature

1. Add a Markdown file under `prompts/`.
2. Add a stable feature key and path in `src/lib/ai/prompt-types.ts` and `src/lib/ai/prompt-loader.ts`.
3. Add evaluation cases under `prompts/evaluation/`.
4. Test output quality, access control, injection handling, and errors before enabling it in the UI.

`generateAIResponse` remains available to avoid breaking existing callers. Prefer `generateFeatureResponse` for new product features.
