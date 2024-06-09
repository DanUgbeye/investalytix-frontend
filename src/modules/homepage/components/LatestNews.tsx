import NewsCard from "@/modules/news/components/news-card";
import { GeneralNews } from "@/modules/news/types";
import { News } from "@/modules/ticker/types";
import moment from "moment";

async function getData(params?: { limit?: number; page?: number }) {
  const { limit = 12, page = 1 } = params ?? {};

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news?limit=${limit}&page=${page}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: News[];
  }>;
}

export default async function LatestNews() {
  const data = await getData({ limit: 12 });
  return (
    <>
      <h2 className="mb-12 text-2xl font-extrabold">Latest news</h2>

      <div className="grid grid-cols-3 gap-14">
        {data.data.map((news) => (
          <NewsCard news={news} />
        ))}
      </div>
    </>
  );
}