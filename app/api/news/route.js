import { NextResponse } from "next/server";
import news from "@/data/data.json";

export async function GET() {
  try {
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
