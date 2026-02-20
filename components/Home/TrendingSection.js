import Image from "next/image";
import Card from "./Card";

export default function TrendingSection() {
  return (
    <main className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Trending Today</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Fresh signals from product teams and indie builders.
          </p>
        </div>
      </div>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* CARD 1 */}
        <Card />
        <Card />
      </section>
    </main>
  );
}
