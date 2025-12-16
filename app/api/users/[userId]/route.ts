// Yes, this was what was added on 16/12/2025 at 23:26

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  return NextResponse.json({
    message: "User route is working",
    userId: params.userId,
  });
}
