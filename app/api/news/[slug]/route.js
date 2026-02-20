import { NextResponse } from "next/server";
import news from "@/data/data.json";

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    const singleNews = news.find((item) => item.slug === slug);

    if (!singleNews) {
      return NextResponse.json({ message: "News not found" }, { status: 404 });
    }

    return NextResponse.json(singleNews);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
