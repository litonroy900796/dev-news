import Image from "next/image";
import React from "react";

function Card() {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
      style={{ animationDelay: "0ms" }}
    >
      <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
        <div className="aspect-video overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Circuit board"
            width={800}
            height={450}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=64&h=64&q=80"
              alt="Author"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>Jules Wang</span>
          </div>
          <span>1 day ago</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-white">
          Why inference stacks are redesigning the dev workflow
        </h3>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
            #ai
          </span>
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
            #infra
          </span>
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
            #workflow
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
          <span>2.4K ↑</span>
          <span>1M views</span>
        </div>
      </article>
    </div>
  );
}

export default Card;
