"use client";
import ColoredNumber from "@/components/ui/ColoredNumber";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import quotes from "@/mock/quotes";
import { getTickerStockDescriptionRoute } from "@/route";
import { Quote } from "@/types";
import Link from "next/link";
import { GoBellFill } from "react-icons/go";

export type QuoteField = {
  label: string;
  key: keyof Quote;
};

export type QuotesTableProps = {
  quotes?: Quote[];
  fields?: QuoteField[];
  notifications?: boolean;
  isIndex?: boolean;
  onRowClick?: (quote: Quote) => void;
  onRowHover?: (quote: Quote) => void;
};

const defaultFields: QuoteField[] = [
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
  isIndex = false,
  onRowClick,
  onRowHover,
}: QuotesTableProps) {
  function onRowClickHandler(quote: Quote) {
    onRowClick && onRowClick(quote);
  }
  function onRowHoverHandler(quote: Quote) {
    onRowHover && onRowHover(quote);
  }
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow headerRow>
            <TableHead
              key={fields[0].label}
              className="!py-2 !text-sm capitalize"
            >
              {fields[0].label}
            </TableHead>
            {fields.slice(1).map((field) => (
              <TableHead
                key={field.label}
                className="!py-2 text-right !text-sm capitalize"
              >
                {field.label}
              </TableHead>
            ))}
            {notifications && <TableHead className=""></TableHead>}
          </TableRow>
        </TableHeader>

        <TableBody>
          {(customQuotes ? customQuotes : quotes).map((quote, index) => (
            <TableRow
              onClick={() => onRowClickHandler(quote)}
              onMouseOver={() => onRowHoverHandler(quote)}
              className=""
              key={`row-${quote.symbol}-${index}`}
            >
              <TableCell className="py-2 text-sm">
                {isIndex ? (
                  quote[fields[0].key]
                ) : (
                  <Link
                    className="text-hover-focus"
                    href={getTickerStockDescriptionRoute(quote.symbol)}
                  >
                    {quote[fields[0].key]}
                  </Link>
                )}
              </TableCell>

              {fields.slice(1).map((field, index) => (
                <TableCell
                  key={`${quote.symbol}-column-${field}-${index}`}
                  className="py-2 text-right text-sm"
                >
                  {["change", "changesPercentage"].includes(field.key) ? (
                    <ColoredNumber
                      number={quote[field?.key] as number}
                      percent={field.key === "changesPercentage"}
                    />
                  ) : ["price"].includes(field.key) ? (
                    formatCurrency(quote[field?.key] as number)
                  ) : (
                    quote[field?.key]
                  )}
                </TableCell>
              ))}

              {notifications && (
                <TableCell className="p-2 text-right text-sm font-bold">
                  <HoverCard>
                    <div className="grid place-content-center">
                      <HoverCardTrigger className="cursor-pointer">
                        <div className="relative w-fit place-content-center">
                          <GoBellFill className="size-5 text-primary-base dark:text-primary-light" />
                          <span className="absolute right-0 top-0 flex h-1 w-1 items-center justify-center rounded-full bg-primary-base dark:bg-primary-light"></span>
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
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
