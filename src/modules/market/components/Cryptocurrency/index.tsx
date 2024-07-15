import Quotes from "@/modules/market/components/Quotes";
import { Quote } from "@/types";
import MarketHeading from "../MarketHeading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Row from "./Row";

export default function Cryptocurrency({ quotes }: { quotes: Quote[] }) {
  return (
    <>
      {/* CRYPTOCURRENCY PAIRS */}
      <section className="">
        <MarketHeading label="CRYPTOCURRENCY PAIRS" />

        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow headerRow>
                <TableHead className="!py-2 !text-sm capitalize">
                  Symbol
                </TableHead>
                <TableHead className="!py-2 text-left !text-sm capitalize">
                  Name
                </TableHead>
                <TableHead className="!py-2 text-left !text-sm capitalize">
                  Price
                </TableHead>
                <TableHead className="!py-2 text-left !text-sm capitalize">
                  Chg
                </TableHead>
                <TableHead className="!py-2 text-left !text-sm capitalize">
                  Chg%
                </TableHead>
                <TableHead className="!py-2 text-left !text-sm capitalize">
                  Close
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <Row quote={quote} key={quote.symbol} />
              ))}
            </TableBody>
          </Table>
        </div>

        {/* <Quotes
          quotes={quotes}
          fields={[
            {
              label: "Symbol",
              key: "symbol",
            },
            {
              label: "name",
              key: "name",
            },
            {
              label: "price",
              key: "price",
            },
            {
              label: "chg",
              key: "change",
            },
            {
              label: "%chg",
              key: "changesPercentage",
            },
            {
              label: "close",
              key: "previousClose",
            },
          ]}
        /> */}
      </section>
    </>
  );
}
