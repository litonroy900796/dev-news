import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ item }) {
  const {
    id,
    slug,
    title,
    description,
    author_name,
    author_avatar,
    published_date,
    tags,
    upvotes,
    downvotes,
    views,
    thumbnail,
  } = item;
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };
  const formattedDate = new Date(published_date).toLocaleDateString();
  return (
    <Link
      href={`/news/${slug}`}
      className="rounded-2xl cursor-pointer bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
      style={{ animationDelay: "0ms" }}
    >
      <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
        <div className="aspect-video overflow-hidden rounded-xl">
          <Image
            src={`/assets/images/${thumbnail}`}
            alt={title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Image
              src={`/assets/images/${author_avatar}`}
              alt={author_name}
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>{author_name}</span>
          </div>
          <span>{formattedDate}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <span>{formatNumber(upvotes)} ↑</span>
          <span>{formatNumber(views)} views</span>
        </div>
      </article>
    </Link>
  );
}

export default Card;
