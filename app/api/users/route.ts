// Yes, this was also what was added on 16/12/2025 at 23:31

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Users API is working",
  });
}
