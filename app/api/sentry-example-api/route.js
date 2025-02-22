import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  throw new Error("Example API Route Error");
  return NextResponse.json({ data: "Testing Error Handling..." });
}
