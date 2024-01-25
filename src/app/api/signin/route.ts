import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const params = await req.json();

  const res = await fetch("http://localhost:5000/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  console.log("🚀 ~ POST ~ res:", res.status);

  return NextResponse.json({ params });
}
