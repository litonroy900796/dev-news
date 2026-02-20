import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsPage() {
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
            <h3 className="text-3xl font-semibold text-white">
              Why inference stacks are redesigning the dev workflow
            </h3>

            <p className="mt-3 text-base text-zinc-300">
              Fast-moving teams are rewriting the rules of deployment by
              treating inference as a product layer.
            </p>

            {/* Author */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=64&h=64&q=80"
                  alt="Author Jules Wang"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-white">
                  Jules Wang
                </span>
              </div>
              <span className="text-xs text-zinc-500">•</span>
              <span>Published on June 18, 2024</span>
            </div>

            {/* Thumbnail */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Circuit board"
                width={1200}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
              <p>
                Inference stacks have moved out of the shadows. Product teams
                are now orchestrating prompt routing, fine-tuning, and
                evaluation directly inside deployment pipelines.
              </p>
              <p>
                Retrieval, guardrails, and personalization now live as
                composable services, unlocking cleaner handoffs between research
                and product teams.
              </p>
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
                  <span className="text-white">2.4K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Downvotes</span>
                  <span className="text-white">120</span>
                </div>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4 text-xs text-zinc-400 flex justify-between">
                <span>Views</span>
                <span className="text-white">1M</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
              <h4 className="text-sm font-semibold text-white">Tags</h4>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
                  #ai
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
                  #infra
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
                  #workflow
                </span>
              </div>
            </div>
          </div>

          {/* Author Card */}
          <div className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px]">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
              <h4 className="text-sm font-semibold text-white">Author</h4>

              <div className="mt-4 flex items-center gap-3">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=96&h=96&q=80"
                  alt="Author"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">Jules Wang</p>
                  <p className="text-xs text-zinc-400">
                    Research lead, Aurora Labs
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-zinc-400">
                Published on June 18, 2024
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
