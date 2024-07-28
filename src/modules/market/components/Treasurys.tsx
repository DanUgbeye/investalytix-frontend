import ColoredNumber from "@/components/ui/ColoredNumber";
import MarketHeading from "./MarketHeading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HTMLAttributes } from "react";
import { FiArrowUp } from "react-icons/fi";
import { IoTriangle } from "react-icons/io5";

type Treasury = {
  date: string;
  month1: number;
  month2: number;
  month3: number;
  month6: number;
  year1: number;
  year2: number;
  year3: number;
  year5: number;
  year7: number;
  year10: number;
  year20: number;
  year30: number;
};

const keyDisplayNames = {
  month1: "1-MO",
  month2: "2-MO",
  month3: "3-MO",
  month6: "6-MO",
  year1: "1-YR",
  year2: "2-YR",
  year3: "3-YR",
  year5: "5-YR",
  year7: "7-YR",
  year10: "10-YR",
  year20: "20-YR",
  year30: "30-YR",
};

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/economy/treasuryRate`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: Treasury[];
  }>;
}

export default async function Treasurys({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const data = await getData();
  const current = data.data[0];
  const prev = data.data[1];
  return (
    <section {...props}>
      <MarketHeading label="U.S. Treasurys" />

      <div className="overflow-auto"></div>

      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow headerRow>
              <TableHead className="!py-2 !text-sm capitalize">
                Symbol
              </TableHead>
              <TableHead className="!py-2 !text-sm capitalize">Yield</TableHead>
              <TableHead className="!py-2 !text-sm capitalize">Chg</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Object.keys(current)
              .filter((key) => key !== "date")
              .map((key) => {
                // @ts-ignore
                const diff = current[key] - prev[key];
                return (
                  <TableRow>
                    <TableCell className="py-2 text-sm">
                      US {keyDisplayNames[key as keyof typeof keyDisplayNames]}
                    </TableCell>
                    <TableCell className="py-2 text-sm">
                      {current[key as unknown as keyof Treasury]}
                    </TableCell>
                    <TableCell className="py-2 text-sm">
                      {diff === 0 ? (
                        "Unch"
                      ) : (
                        <div className="flex items-center gap-1">
                          <ColoredNumber number={diff} decimals={3} />
                          <IoTriangle
                            className={`${diff > 0 ? "fill-main-green-light" : "fill-main-red-light rotate-180"}`}
                          />
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
