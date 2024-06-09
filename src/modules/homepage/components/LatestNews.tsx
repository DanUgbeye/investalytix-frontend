import { GeneralNews } from "@/modules/news/types";
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
    data: GeneralNews[];
  }>;
}

export default async function LatestNews() {
  const data = await getData({ limit: 12 });
  return (
    <>
      <h2 className="mb-12 text-2xl font-extrabold">Latest news</h2>

      <div className="grid grid-cols-3 gap-14">
        {data.data.map((news) => (
          <News news={news} />
        ))}
      </div>
    </>
  );
}

function News({ news }: { news: GeneralNews }) {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 shrink-0 rounded-full bg-gray-200"></div>
        <p className="text-sm">{moment(news.publishedDate).fromNow()}</p>
        <div className="h-1 w-1 shrink-0 rounded-full bg-black"></div>
        <p className="text-sm">{news.site}</p>
      </div>

      <p className="mt-2 text-sm">{news.title}</p>
    </div>
  );
}
