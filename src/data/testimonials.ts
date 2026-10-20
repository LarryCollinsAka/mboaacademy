export interface LearningOutcomeItem {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

// These are intended learning outputs, not testimonials or claims about graduate employment.
export const LEARNING_OUTCOMES: LearningOutcomeItem[] = [
  {
    id: "outcome-1",
    title: "Communicate clearly and professionally",
    description: "Practise responding to a customer, colleague, or stakeholder with the right tone, context, and next step.",
    examples: ["Customer response", "Escalation note", "Professional email"],
  },
  {
    id: "outcome-2",
    title: "Coordinate work reliably",
    description: "Organise information, track actions, identify dependencies, and make handoffs easier for the next person in the process.",
    examples: ["Task tracker", "Meeting brief", "Handover checklist"],
  },
  {
    id: "outcome-3",
    title: "Document and improve a process",
    description: "Turn a repeatable task into a clear process that supports consistency, quality, and team learning.",
    examples: ["Process map", "Knowledge-base article", "Standard operating procedure"],
  },
  {
    id: "outcome-4",
    title: "Demonstrate role-specific capability",
    description: "Build a portfolio of practical work samples and explain the decisions, quality criteria, and limits behind each result.",
    examples: ["Assessed work sample", "Reflection note", "Capability evidence record"],
  },
];
