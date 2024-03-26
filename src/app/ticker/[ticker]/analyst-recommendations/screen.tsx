"use client";

import { Button } from "@/components/ui/button";

interface AnalystRecommendationScreenProps {
  ticker: string;
}

export default function AnalystRecommendationScreen(
  props: AnalystRecommendationScreenProps
) {
  const { ticker } = props;

  return (
    <section className=" space-y-10 py-5 ">
      <div className=" space-y-5 ">
        <h2 className=" text-2xl font-semibold md:text-3xl ">
          Apple Stock Forecast & Price Target
        </h2>

        <div className=" flex flex-wrap gap-3 rounded bg-[#FFF3E9] px-6 py-3 text-xs ">
          <div className=" flex flex-wrap items-center gap-x-8 gap-y-2 ">
            <span className=" dark:text-black ">
              See the Price Targets and Ratings of:
            </span>

            <fieldset className=" flex flex-wrap gap-x-5 ">
              <label
                htmlFor="all-analyst"
                className=" flex items-center gap-x-2 dark:text-black "
              >
                <input
                  name="analysts"
                  id="all-analyst"
                  type="radio"
                  className=" rounded-full "
                />
                <span>All Analyst</span>
              </label>

              <label
                htmlFor="top-analyst"
                className=" flex items-center gap-x-2 dark:text-black "
              >
                <input
                  name="analysts"
                  id="top-analyst"
                  type="radio"
                  className=" rounded-full "
                />
                <span>Top Analysts</span>
                <Button size={"sm"} className=" h-8 px-4 ">
                  Premium
                </Button>
              </label>
            </fieldset>
          </div>
        </div>
      </div>

      <div className=" grid gap-x-5 gap-y-10 lg:grid-cols-[max-content,1fr] ">
        <div className=" space-y-3 lg:max-w-96 ">
          <h4 className=" font-bold sm:text-xl ">AAPL Analyst Ratings</h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] border ">
            <div className=" bg-gray-600 "></div>

            <div className=" border-t p-2 text-center text-xs ">
              Based on 33 analyst giving stock ratings to Apple in the past 3
              months.
            </div>
          </div>
        </div>

        <div className=" space-y-3 ">
          <h4 className=" font-bold sm:text-xl ">
            AAPL Stock 12 Months Forecast
          </h4>

          <div className=" grid min-h-80 grid-rows-[1fr,auto] border ">
            <div className=" bg-gray-600 "></div>

            <div className=" border-t p-2 text-xs ">
              Based on 33 analyst giving stock ratings to Apple in the past 3
              months.
            </div>
          </div>
        </div>
      </div>

      <div className=" space-y-2 ">
        <h5 className=" text-lg font-bold ">Recommendation Trends</h5>

        <p className="  ">
          The latest consensus rating for Apple is &apos;Buy&apos;. This is the average
          recommendation of 48 analysts: 0 strong sell, 1 sell, 13 hold, 22 buy,
          12 strong buy. In the previous period, 50 analysts also majorly
          recommended &apos;Buy&apos; for Apple.
        </p>
      </div>
    </section>
  );
}
