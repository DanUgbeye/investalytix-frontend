import { Swiper, SwiperSlide } from "swiper/react";
import Quote from "@/components/ui/Quote";
import quotes from "@/mock/quotes";
import { Autoplay } from "swiper/modules";

export default function QuotesBoard() {
  return (
    <section className="">
      <div className="mb-4 py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={"auto"}
          loop
          freeMode
          autoplay
        >
          {quotes.map((quote) => (
            <SwiperSlide className="!flex-shrink" key={quote.symbol}>
              <Quote quote={quote} key={quote.symbol} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
