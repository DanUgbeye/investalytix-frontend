import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { LineChart } from "lucide-react";
import { HTMLAttributes } from "react";

export type RatioTableData = {
  name: string;
  fields: { label: string; value: string }[];
};

export interface RatioTableProps extends HTMLAttributes<HTMLDivElement> {
  ratio: RatioTableData;
}

export default function RatioTable(props: RatioTableProps) {
  const { ratio, className, ...rest } = props;

  return (
    <Table {...rest} className={cn("w-full", className)}>
      <TableHeader className="">
        <TableRow headerRow>
          <TableHead className=" ">{ratio.name}</TableHead>

          <TableHead className="text-right">
            <LineChart className="ml-auto size-5" />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-full">
        {ratio.fields.map((item, index) => {
          return (
            <TableRow key={`${item.label}-${index}`} className="">
              <TableCell className=" ">{item.label}</TableCell>
              <TableCell className="text-right font-bold">
                {item.value}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
