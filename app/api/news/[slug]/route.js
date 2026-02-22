import { NextResponse } from "next/server";
import news from "@/data/data.json";
import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // 🔥 VERY IMPORTANT

const filePath = path.join(process.cwd(), "data", "data.json");

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

// ===== PATCH ======
export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 },
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const news = JSON.parse(fileData);

    const newsIndex = news.findIndex((item) => item.slug === params.slug);

    if (newsIndex === -1) {
      return NextResponse.json({ message: "News not found" }, { status: 404 });
    }

    news[newsIndex].title = title;
    news[newsIndex].description = description;

    fs.writeFileSync(filePath, JSON.stringify(news, null, 2));

    return NextResponse.json({
      message: "Updated successfully",
      updatedNews: news[newsIndex],
    });
  } catch (error) {
    console.log(error); // 🔥 console check করো
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const news = JSON.parse(fileData);

    const filteredNews = news.filter((item) => item.slug !== params.slug);

    // যদি কিছুই delete না হয়
    if (news.length === filteredNews.length) {
      return NextResponse.json({ message: "News not found" }, { status: 404 });
    }

    fs.writeFileSync(filePath, JSON.stringify(filteredNews, null, 2));

    return NextResponse.json({
      message: "News deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
