import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

// This route is a thin forwarding layer.
// Phase 1: calls Claude directly so the UI is testable before FastAPI exists.
// Phase 2+: replace body with a piped fetch to process.env.API_URL/api/conversations.

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: `You are Drift, an AI travel planning agent.
When a user describes their situation (time available, location, budget, interests),
respond with 2-3 concrete itinerary options. Be specific: name actual places,
give rough costs in yen, and note transit times.
Explain the tradeoff of each option in one sentence.
Keep responses concise and practical.`,
    messages,
  });

  return result.toDataStreamResponse();
}
