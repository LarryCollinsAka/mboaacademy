export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: "Money Intelligence" | "Ownership & Assets" | "Methodology" | "Operational Skills";
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: "blog-1",
    title: "How Everyday Roles Create Value Across a Business",
    slug: "cash-flow-vs-capital-gains",
    excerpt: "Trace how customer support, administration, delivery, finance, and product work connect to customer outcomes and organizational performance.",
    category: "Operational Skills",
    readTime: "6 min read",
    publishedDate: "Oct 2026",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "HCIL Thought Leadership",
      role: "Financial Intelligence Desk",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
    },
    tags: ["Value Chain", "Role Expectations", "Customer Outcomes", "Team Handoffs"],
    content: `
Value is created through connected work, not only through a single product or executive decision. A customer needs an accurate answer; a support representative resolves the request. An administrator coordinates the next action. Finance records the transaction. Operations fulfil the promise. Each role contributes to the result.

### 1. Start with the customer or operational need
Ask who benefits from the work, what problem must be solved, and what a successful outcome looks like. A role becomes clearer when its output, quality standard, and dependencies are visible.

### 2. Understand the handoffs
Many failures happen between tasks: missing information, unclear ownership, late updates, or incomplete documentation. A useful handoff tells the next person what happened, what remains, what risks exist, and what action is needed.

### 3. Make quality observable
Use practical evidence such as a clear customer response, accurate spreadsheet, well-prepared meeting brief, documented process, or completed case record. Define what good work means before assessing it.

### 4. Learn from the result
Track useful measures such as accuracy, response time, rework, customer resolution, or on-time completion where relevant. Measures should fit the role; one universal score cannot describe every kind of contribution.
    `,
  },
  {
    id: "blog-2",
    title: "From Individual Tasks to Reliable Team Processes",
    slug: "robert-kiyosaki-software-engineers",
    excerpt: "How documentation, clear handoffs, and repeatable procedures help teams reduce errors and deliver consistent results.",
    category: "Operational Skills",
    readTime: "7 min read",
    publishedDate: "Oct 2026",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "HCIL Pedagogy Team",
      role: "Enterprise Systems Faculty",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    },
    tags: ["Documentation", "Handoffs", "Process Quality", "Team Coordination"],
    content: `
Teams deliver more reliable results when individual tasks connect through clear processes. A strong contributor understands both their own task and the next person who depends on it.

### From isolated tasks to a dependable process
1. **Define the output.** Agree on what needs to be delivered, for whom, and by when.
2. **Record the method.** Document the steps, decision points, quality checks, and exceptions.
3. **Make handoffs explicit.** State what is complete, what remains, and who owns the next action.
4. **Review and improve.** Use feedback and appropriate measures to reduce avoidable errors and rework.

These habits help employees, freelancers, team leads, and founders. They improve collaboration before any decision to automate, delegate, or build a business system.
    `,
  },
  {
    id: "blog-3",
    title: "Demonstrated Capability Alongside Recognized Credentials: The HCIL Assessment Standard",
    slug: "inside-hcil-douala-yaounde-labs",
    excerpt: "Explore work samples, task simulations, assessment criteria, and honest ways to show what you can do without relying on inflated promises.",
    category: "Methodology",
    readTime: "5 min read",
    publishedDate: "Oct 2026",
    coverImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Academic Evaluation Board",
      role: "HCIL Academy Standards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    },
    tags: ["Assessment", "Proof of Work", "Rubrics", "Real Deliverables"],
    content: `
A certificate can document participation or completion, but it does not automatically show how someone performs a task. Practical evidence can add context when its purpose and limits are clear.

### Useful elements of an evidence-based assessment
- **Task brief:** What problem, audience, constraints, and output were specified?
- **Quality criteria:** What does accuracy, clarity, completeness, safety, or timeliness mean for this task?
- **Work sample:** What did the learner actually produce?
- **Reasoning and reflection:** What decisions were made, what trade-offs mattered, and what would be improved?
- **Feedback:** Which criteria were met, and what practice is recommended next?

Assessment methods should be published per program. Work samples support a more informed conversation about capability, but they do not guarantee hiring or contract outcomes.
    `,
  },
];
