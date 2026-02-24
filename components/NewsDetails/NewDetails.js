import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewDetails({ news }) {
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };
  const formattedDate = new Date(news.published_date).toLocaleDateString();
  return (
    <main className="mt-12">
      {/* Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
        >
          Back to home
        </Link>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* MAIN ARTICLE */}
        <article className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]">
          <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
            <h3 className="text-3xl font-semibold text-white">{news.title}</h3>

            <p className="mt-3 text-base line-clamp-2 text-zinc-300">
              {news.description}
            </p>

            {/* Author */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Image
                  src={`/assets/images/${news.author_avatar}`}
                  alt={news.author_name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-white">
                  {news.author_name}
                </span>
              </div>
              <span className="text-xs text-zinc-500">•</span>
              <span>Published on {formattedDate}</span>
            </div>

            {/* Thumbnail */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={`/assets/images/${news.thumbnail}`}
                alt="Circuit board"
                width={1200}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
              <p>{news.description}</p>
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* Engagement */}
          <div className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
              <h4 className="text-sm font-semibold text-white">Engagement</h4>

              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>Upvotes</span>
                  <span className="text-white">
                    {formatNumber(news.upvotes)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Downvotes</span>
                  <span className="text-white">
                    {formatNumber(news.downvotes)}
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4 text-xs text-zinc-400 flex justify-between">
                <span>Views</span>
                <span className="text-white">{formatNumber(news.views)}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
              <h4 className="text-sm font-semibold text-white">Tags</h4>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                {news.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Author Card */}
          <div className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
              <h4 className="text-sm font-semibold text-white">Author</h4>

              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={`/assets/images/${news.author_avatar}`}
                  alt={news.author_name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    {news.author_name}
                  </p>
                  <p className="text-xs text-zinc-400">{news.author_role}</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-zinc-400">
                Published on {formattedDate}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default NewDetails;
