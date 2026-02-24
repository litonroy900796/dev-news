import NewDetails from "@/components/NewsDetails/NewDetails";
import Modal from "@/components/ui/Modal";
import Image from "next/image";
import Link from "next/link";

async function getSingleNews(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}
export default async function BlogDetailsPage({ params }) {
  const { slug } = params;
  const news = await getSingleNews(slug);

  return (
    <Modal>
      <section className="-mt-14">
        <NewDetails news={news} />
      </section>
    </Modal>
  );
}
