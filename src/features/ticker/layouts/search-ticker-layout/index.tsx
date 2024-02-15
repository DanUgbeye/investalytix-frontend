import Mapper from "@/components/mapper";
import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";
import quotes from "@/mock/quotes";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";
import { MdOutlineInsertChart } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import TickerNavLink from "../../components/ticker-nav-link";
import { Profile } from "../../ticker.types";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RiStarSLine } from "react-icons/ri";
import Quote from "@/components/ui/Quote";

export const TICKER_NAV_TABS = {
  STOCK_DESCRIPTION: "stock-description",
  ANALYST_RECOMMENDATIONS: "analyst-recommendation",
  CHARTS: "charts",
  FINANCIALS: "financials",
  INDIVIDUAL_COMPANY_NEWS: "individual-company-news",
  DIVIDENDS: "dividends",
  INDUSTRY_SECTOR_COMPARISON: "industry-sector-comparison",
} as const;

export type TickerNavTab =
  (typeof TICKER_NAV_TABS)[keyof typeof TICKER_NAV_TABS];

export interface SearchTickerLayoutProps extends HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  data?: Profile;
}

export default function SearchTickerLayout(props: SearchTickerLayoutProps) {
  const { data, isLoading, className, children, ...rest } = props;
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const activeTab = searchParams.get("tab");

  return (
    <section {...rest} className={cn("  ", className)}>
      <Container className=" relative grid min-h-[calc(100dvh-5rem)] grid-cols-1 grid-rows-1 p-0 sm:p-0 xl:p-0 ">
        <aside className="  top-0 col-start-1 row-start-1 w-[15rem] ">
          <div className=" py-4 ">
            {isLoading && (
              <div className=" grid w-full place-items-center py-8 ">
                <Spinner className=" size-8 text-primary-base " />
              </div>
            )}

            {!isLoading && data && (
              <div className="  ">
                <div className=" flex flex-col ">
                  <div className=" px-4 ">
                    <div className=" font-bold text-primary-base ">AAPL</div>
                    <div className=" text-2xl font-bold ">Apple INC</div>
                  </div>

                  <div className=" space-y-1 px-4 py-2 ">
                    <div className=" flex items-center space-x-1.5 ">
                      <span className=" font-bold ">$19.88</span>
                      <span className=" text-xs font-bold text-[#079516] ">
                        +1.59 (+8.69%)
                      </span>
                    </div>

                    <div className=" text-xs text-gray-400 ">
                      At close: December 18 04:00 PM EST
                    </div>
                  </div>

                  <div className=" space-y-1 bg-gray-100 px-4 py-2 ">
                    <div className=" flex items-center space-x-1.5 ">
                      <span className=" font-bold ">$20.56</span>
                      <span className=" text-xs font-bold text-red-500 ">
                        -0.68 (-0.42%)
                      </span>
                    </div>

                    <div className=" text-xs text-gray-400 ">
                      After hours: January 12 07:59 PM EST
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TICKER NAV LINKS */}
            <div className=" divide-y border-y border-r ">
              <Mapper
                id="ticker-nav-links"
                list={[
                  {
                    name: "Stock Description",
                    tabName: TICKER_NAV_TABS.STOCK_DESCRIPTION,
                    icon: MdOutlineInsertChart,
                    active:
                      activeTab === TICKER_NAV_TABS.STOCK_DESCRIPTION ||
                      !activeTab,
                    href: pathname,
                  },
                  {
                    name: "Analyst Recommendation",
                    tabName: TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS,
                    icon: MdOutlineInsertChart,
                    active:
                      activeTab === TICKER_NAV_TABS.ANALYST_RECOMMENDATIONS,
                    href: pathname,
                  },
                  {
                    name: "Charts",
                    tabName: TICKER_NAV_TABS.CHARTS,
                    icon: MdOutlineInsertChart,
                    active: activeTab === TICKER_NAV_TABS.CHARTS,
                    href: pathname,
                  },
                  {
                    name: "Financials",
                    tabName: TICKER_NAV_TABS.FINANCIALS,
                    icon: MdOutlineInsertChart,
                    active: activeTab === TICKER_NAV_TABS.FINANCIALS,
                    href: pathname,
                  },
                  {
                    name: "Individual Company News",
                    tabName: TICKER_NAV_TABS.INDIVIDUAL_COMPANY_NEWS,
                    icon: MdOutlineInsertChart,
                    active:
                      activeTab === TICKER_NAV_TABS.INDIVIDUAL_COMPANY_NEWS,
                    href: pathname,
                  },
                  {
                    name: "Dividends",
                    tabName: TICKER_NAV_TABS.DIVIDENDS,
                    icon: MdOutlineInsertChart,
                    active: activeTab === TICKER_NAV_TABS.DIVIDENDS,
                    href: pathname,
                  },
                  {
                    name: "Industry & Sector Comparison",
                    tabName: TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON,
                    icon: MdOutlineInsertChart,
                    active:
                      activeTab === TICKER_NAV_TABS.INDUSTRY_SECTOR_COMPARISON,
                    href: pathname,
                  },
                ]}
                component={(props) => {
                  const {
                    item: { name, tabName, icon, active, href },
                  } = props;

                  return (
                    <TickerNavLink
                      href={href}
                      icon={icon}
                      tabName={tabName}
                      active={active}
                    >
                      {name}
                    </TickerNavLink>
                  );
                }}
              />
            </div>
          </div>
        </aside>

        <main className=" col-start-1 row-start-1 ml-[15rem] ">
          <Container className=" pl-6 sm:pl-6 xl:pl-6 ">
            <section className="  ">
              <div className="mb-4 py-8">
                <Swiper spaceBetween={0} slidesPerView={"auto"} loop freeMode>
                  {quotes.map((quote) => (
                    <SwiperSlide className="!flex-shrink" key={quote.symbol}>
                      <Quote quote={quote} key={quote.symbol} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="relative mb-4 h-[170px] w-full lg:mb-12">
                <Image
                  src={"/images/ad1.png"}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section className=" grid grid-cols-[1fr,auto] grid-rows-2 gap-x-10 gap-y-6 xl:grid-cols-[auto,auto,auto] xl:grid-rows-1 ">
              <div className=" col-start-1 space-y-3 ">
                <div className=" text-3xl font-bold ">Apple INC</div>
                <div className=" text-sm ">
                  NasdaqCM - NasdaqCM Real Time Price. Currency in USD
                </div>
              </div>

              <div className=" col-span-full row-start-2 flex xl:col-span-1 xl:col-start-2 xl:row-start-1 ">
                <div className=" space-y-3 ">
                  <div className=" flex items-center space-x-1.5 ">
                    <span className=" text-3xl font-bold ">19.88</span>
                    <span className=" text-lg font-bold text-[#079516] ">
                      +1.59 (+8.69%)
                    </span>
                  </div>

                  <div className=" text-sm text-gray-400 ">
                    At close: December 18 04:00 PM EST
                  </div>
                </div>

                <Separator orientation="vertical" className=" mx-4 h-full " />

                <div className=" space-y-3 ">
                  <div className=" flex items-center space-x-1.5 ">
                    <span className=" text-3xl font-bold ">20.56</span>
                    <span className=" text-lg font-bold text-red-500 ">
                      +0.68 (+3.42%)
                    </span>
                  </div>

                  <div className=" text-sm text-gray-400 ">
                    At close: December 18 04:00 PM EST
                  </div>
                </div>
              </div>

              <div className=" col-start-2 row-start-1 xl:col-start-3 ">
                <Button
                  variant={"ghost"}
                  className=" gap-x-1.5 text-xs shadow-md "
                >
                  <RiStarSLine className=" size-6" />
                  <span className="  ">Add to Favourite</span>
                </Button>
              </div>
            </section>

            <section className="  ">{children}</section>
          </Container>
        </main>
      </Container>
    </section>
  );
}
