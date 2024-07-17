"use client";
import Cryptocurrency from "@/modules/market/components/Cryptocurrency";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketHeader from "@/modules/market/components/MarketHeader";
import { Quote } from "@/types";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store";
import useFetcher from "@/hooks/useFetcher";
import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

async function getData(page: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/crypto?page=${page}`
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
    data: Quote[];
  }>;
}

export default function CryptocurrencyPage() {
  const store = useAppStore((store) => ({
    auth: store.auth,
    initialised: store.initialised,
  }));
  const { data, loading, wrapper } = useFetcher<{
    message: String;
    status: number;
    data: Quote[];
  }>(null);
  const [pageOffset, setPageOffset] = useState(0);
  const router = useRouter();
  const perPage = 51;
  const pageCount = 94;

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  useEffect(() => {
    if (!store.initialised || !store.auth) return;
    wrapper(() => getData(pageOffset + 1));
  }, [pageOffset, store.auth, store.initialised]);

  async function handlePageClick({ selected }: { selected: number }) {
    setPageOffset(selected);
  }

  return (
    <>
      <MarketHeader name="CRYPTOCURRENCY" active="CRYPTOCURRENCY" />

      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : data ? (
        <>
          <Cryptocurrency quotes={data.data} />

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={isMobile ? 2 : 3}
            pageCount={pageCount}
            previousLabel="<"
            marginPagesDisplayed={isMobile ? 1 : 2}
            forcePage={pageOffset}
            containerClassName="pagination__container"
            pageClassName="pagination__page"
            nextClassName="pagination__page"
            previousClassName="pagination__page"
            activeClassName="pagination__page-active"
          />
          <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
        </>
      ) : null}
    </>
  );
}
