import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Futures({
  isFairValue = false,
}: {
  isFairValue?: boolean;
}) {
  return (
    <div className="mt-8">
      <p className="white-text pb-5 font-bold capitalize text-[#2F3A48]">
        {isFairValue ? "fair value futures (-27.48)" : "futures"}
      </p>

      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow headerRow>
              <TableHead className="capitalize">
                {isFairValue ? "FV CLOSE" : "IND CLOSE"}
              </TableHead>
              <TableHead className="capitalize">FUTURE</TableHead>
              <TableHead className="capitalize">
                {isFairValue ? "IML OPEN" : "CHANGE"}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="border-none odd:bg-[#F0F3FA] dark:odd:bg-main-gray-200/10">
              <TableCell>37,656.52</TableCell>
              <TableCell> 37,945</TableCell>
              <TableCell>-61</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
