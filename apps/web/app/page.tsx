import dynamic from "next/dynamic";

// Loaded client-only — prevents the AI SDK from touching localStorage
// during Next.js's server-side pre-render pass.
const Chat = dynamic(() => import("./components/Chat"), { ssr: false });

export default function Page() {
  return <Chat />;
}
