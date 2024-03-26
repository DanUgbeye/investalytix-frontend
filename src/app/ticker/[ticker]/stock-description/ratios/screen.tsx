"use client";

import RatioTable from "./ratio-table";

interface RatiosScreenProps {
  ticker: string;
}

export default function RatiosScreen(props: RatiosScreenProps) {
  const { ticker } = props;

  return (
    <section className=" space-y-8  ">
      <div className=" grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0 ">
        <div className=" flex flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center lg:px-3 ">
          <span className="  ">Fiscal Year End</span>
          <span className=" font-bold ">09/2023</span>
        </div>

        <div className=" flex flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center lg:px-3 ">
          <span className="  ">Last Quarter End</span>
          <span className=" font-bold ">09/2023 Q4</span>
        </div>

        <div className=" flex flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center lg:px-3 ">
          <span className="  ">Current/T12M</span>
          <span className=" font-bold ">(USD)</span>
        </div>
      </div>

      <div className=" grid gap-10 sm:grid-cols-2 sm:justify-center xl:grid-cols-3 ">
        <RatioTable
          className="  "
          ratio={{
            name: "Issue Data",
            fields: [
              {
                label: "Last Px",
                value: "USD/182.89",
              },
              {
                label: "P/E",
                value: "29.9",
              },
              {
                label: "Dvd Ind Yld",
                value: "0.5%",
              },
              {
                label: "P/B",
                value: "17.69",
              },
              {
                label: "P/S",
                value: "17.69",
              },
              {
                label: "52 Week Range",
                value: "3.11 - 20.09",
              },
              {
                label: "Volume",
                value: "59,763,221",
              },
              {
                label: "Avg. Volume",
                value: "40,368,106",
              },
            ],
          }}
        />

        <RatioTable
          className="  "
          ratio={{
            name: "Per Share Data",
            fields: [
              {
                label: "Last Px",
                value: "USD/182.89",
              },
              {
                label: "P/E",
                value: "29.9",
              },
              {
                label: "Dvd Ind Yld",
                value: "0.5%",
              },
              {
                label: "P/B",
                value: "17.69",
              },
              {
                label: "P/S",
                value: "17.69",
              },
              {
                label: "52 Week Range",
                value: "3.11 - 20.09",
              },
              {
                label: "Volume",
                value: "59,763,221",
              },
              {
                label: "Avg. Volume",
                value: "40,368,106",
              },
            ],
          }}
        />

        <RatioTable
          className="  "
          ratio={{
            name: "Cash Flow Analysis",
            fields: [
              {
                label: "Last Px",
                value: "USD/182.89",
              },
              {
                label: "P/E",
                value: "29.9",
              },
              {
                label: "Dvd Ind Yld",
                value: "0.5%",
              },
              {
                label: "P/B",
                value: "17.69",
              },
              {
                label: "P/S",
                value: "17.69",
              },
              {
                label: "52 Week Range",
                value: "3.11 - 20.09",
              },
              {
                label: "Volume",
                value: "59,763,221",
              },
              {
                label: "Avg. Volume",
                value: "40,368,106",
              },
            ],
          }}
        />

        <RatioTable
          className="  "
          ratio={{
            name: "Growth Potential",
            fields: [
              {
                label: "Last Px",
                value: "USD/182.89",
              },
              {
                label: "P/E",
                value: "29.9",
              },
              {
                label: "Dvd Ind Yld",
                value: "0.5%",
              },
              {
                label: "P/B",
                value: "17.69",
              },
              {
                label: "P/S",
                value: "17.69",
              },
              {
                label: "52 Week Range",
                value: "3.11 - 20.09",
              },
              {
                label: "Volume",
                value: "59,763,221",
              },
              {
                label: "Avg. Volume",
                value: "40,368,106",
              },
            ],
          }}
        />

        <RatioTable
          className="  "
          ratio={{
            name: "Profitability",
            fields: [
              {
                label: "Last Px",
                value: "USD/182.89",
              },
              {
                label: "P/E",
                value: "29.9",
              },
              {
                label: "Dvd Ind Yld",
                value: "0.5%",
              },
              {
                label: "P/B",
                value: "17.69",
              },
              {
                label: "P/S",
                value: "17.69",
              },
              {
                label: "52 Week Range",
                value: "3.11 - 20.09",
              },
              {
                label: "Volume",
                value: "59,763,221",
              },
              {
                label: "Avg. Volume",
                value: "40,368,106",
              },
            ],
          }}
        />

        <RatioTable
          className="  "
          ratio={{
            name: "Structure",
            fields: [
              {
                label: "Last Px",
                value: "USD/182.89",
              },
              {
                label: "P/E",
                value: "29.9",
              },
              {
                label: "Dvd Ind Yld",
                value: "0.5%",
              },
              {
                label: "P/B",
                value: "17.69",
              },
              {
                label: "P/S",
                value: "17.69",
              },
              {
                label: "52 Week Range",
                value: "3.11 - 20.09",
              },
              {
                label: "Volume",
                value: "59,763,221",
              },
              {
                label: "Avg. Volume",
                value: "40,368,106",
              },
            ],
          }}
        />
      </div>
    </section>
  );
}
