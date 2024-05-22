import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import quotes from "@/mock/quotes";
import { Quote } from "@/types";
import Link from "next/link";
import { GoBellFill } from "react-icons/go";

type Field = {
  label: string;
  key: keyof (typeof quotes)[number];
};

const defaultFields: Field[] = [
  {
    label: "Symbol",
    key: "symbol",
  },
  {
    label: "last",
    key: "price",
  },
  {
    label: "chg",
    key: "change",
  },
  {
    label: "chg%",
    key: "changesPercentage",
  },
];

export default function Quotes({
  fields = defaultFields,
  notifications = false,
  quotes: customQuotes,
}: {
  quotes?: Quote[];
  fields?: Field[];
  notifications?: boolean;
}) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-white dark:text-white/80">
            <th className="th p-2 text-left uppercase">{fields[0].label}</th>
            {fields.slice(1, -1).map((field) => (
              <th key={field.label} className="th text-right uppercase">
                {field.label}
              </th>
            ))}
            <th className="th p-2 text-right uppercase">{fields[fields.length-1].label}</th>
            {notifications && <th className="th text-left uppercase"></th>}
          </tr>
        </thead>

        <tbody>
          {(customQuotes ? customQuotes : quotes).map((quote) => (
            <tr
              key={quote.symbol}
              className="white-text text-black odd:bg-[#F9F9F9] dark:border-b dark:border-b-white/10 dark:text-[#F8F7F7] dark:odd:bg-transparent"
            >
              <td className="p-2 text-left text-sm font-bold uppercase">
                <Link
                  href={`/ticker/${quote[fields[0].key]}`}
                  className="outline-none hover:underline focus:underline"
                >
                  {quote[fields[0].key]}
                </Link>
              </td>
              {fields.slice(1).map((field) => (
                <td
                  key={field.key}
                  className="p-2 text-right text-sm font-bold"
                >
                  {quote[field.key]}
                </td>
              ))}
              {notifications && (
                <td className="p-2 text-right text-sm font-bold">
                  <HoverCard>
                    <div className="grid place-content-center">
                      <HoverCardTrigger className="cursor-pointer">
                        <div className="relative w-fit place-content-center">
                          <GoBellFill className="size-5 text-primary-base dark:text-primary-light" />
                          <span className="absolute right-0 top-0 flex h-1 w-1  items-center justify-center rounded-full  bg-primary-base dark:bg-primary-light"></span>
                        </div>
                      </HoverCardTrigger>
                    </div>
                    <HoverCardContent
                      align="end"
                      className="bg-white p-0 text-left dark:border-[#191919] dark:bg-black"
                    >
                      <Notification />
                    </HoverCardContent>
                  </HoverCard>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Notification() {
  return (
    <div className="">
      <header className="bg-[#191919] p-2 text-left text-white/80">
        <p className="">Apple Notifications</p>
      </header>

      <section className="">
        <News />
        <News />
        <News />
      </section>

      <footer className="flex justify-between bg-[#191919] p-2 text-white/80">
        <Link href="" className="text-hover-focus">
          Analysis
        </Link>
        <Link href="" className="text-hover-focus">
          Forecast
        </Link>
        <Link href="" className="text-hover-focus">
          Chart
        </Link>
        <Link href="" className="text-hover-focus">
          News
        </Link>
      </footer>
    </div>
  );
}

function News() {
  return (
    <Link
      href=""
      className="group inline-block border-b border-dashed border-black/20 p-2 text-xs font-light dark:border-b-white/10"
    >
      <p className="">April 01, 2024</p>
      <p className="white-text py-1 font-normal group-hover:text-primary-base group-focus:text-primary-base dark:group-hover:text-primary-light dark:group-focus:text-primary-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="">Investalytix News</p>
    </Link>
  );
}
