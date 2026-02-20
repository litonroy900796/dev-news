import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Dev News",
  description:
    "A news aggregator for developers built with Next.js 13 and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-zinc-100 antialiased">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-32 top-10 h-80 w-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--glow-strong), transparent 70%)",
              }}
            ></div>

            <div
              className="absolute right-0 top-52 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--glow), transparent 70%)",
              }}
            ></div>

            <div className="noise absolute inset-0"></div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
