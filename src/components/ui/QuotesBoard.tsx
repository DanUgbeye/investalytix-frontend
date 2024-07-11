"use client";

import Quote from "@/components/ui/Quote";
import { clientAPI } from "@/config/client/api";
import { QUERY_KEYS } from "@/data/query-keys";
import { MarketRepository } from "@/modules/market/repository";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function QuotesBoard() {
  const marketRepo = new MarketRepository(clientAPI);

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.GET_TRENDING_STOCKS],
    queryFn: ({ signal }) => marketRepo.getTrendingStocks({ signal }),
    refetchInterval: false,
    refetchOnReconnect: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
  };

  return (
    <section className=" ">
      <div className="mb-8 border-y dark:border-main-gray-700">
        {data && (
          <Slider {...settings}>
            {data.map((quote, index) => (
              <Quote quote={quote} key={quote.symbol} className={`mr-10`} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
