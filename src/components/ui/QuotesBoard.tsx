import { Swiper, SwiperSlide } from "swiper/react";
import Quote from "@/components/ui/Quote";
import quotes from "@/mock/quotes";
import { Autoplay } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function QuotesBoard() {
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
    <section className="slider-container">
      <div className="mb-4 py-8">
        <Slider {...settings}>
          {quotes.map((quote, index) => (
            <Quote quote={quote} key={quote.symbol} className={`mr-10`} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
