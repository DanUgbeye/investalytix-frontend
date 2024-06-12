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
import quotes from "@/mock/quotes";
import { Quote } from "@/types";
import Link from "next/link";
import { GoBellFill } from "react-icons/go";

export type QuoteField = {
  label: string;
  key: keyof Quote;
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
}: {
  quotes?: Quote[];
  fields?: QuoteField[];
  notifications?: boolean;
}) {
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
          </TableRow>
        </TableHeader>

        <TableBody>
          {(customQuotes ? customQuotes : quotes).map((quote) => (
            <TableRow className="">
              <TableCell className="py-2 text-sm">
                <Link className="text-hover-focus" href={`/ticker/${quote.symbol}`}>
                {quote[fields[0].key]}
                </Link>
              </TableCell>

              {fields.slice(1).map((field) => (
                <TableCell className="py-2 text-right text-sm">
                  {quote[field.key]}
                </TableCell>
              ))}
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
