import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Next.js frontend is UI-only.
  // All AI/agent logic lives in the FastAPI backend (apps/api).
  // The /api/chat route here is a thin stream-forwarding layer only.
};

export default nextConfig;
