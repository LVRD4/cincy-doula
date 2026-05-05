import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "Doula987";

export async function POST(request: NextRequest) {
  const { password, from } = await request.json();

  if (password !== PASSWORD) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const redirect = from && from !== "/login" ? from : "/";
  const response = NextResponse.json({ ok: true, redirect });

  response.cookies.set("site_auth", "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
