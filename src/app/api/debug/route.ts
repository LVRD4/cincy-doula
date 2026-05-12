import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
      ? `set (${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.slice(0, 4)}...)`
      : "MISSING",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "MISSING",
  });
}
