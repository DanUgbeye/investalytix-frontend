import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TableHeaderCellProps extends HTMLAttributes<HTMLTableCellElement> {}

export function TableHeaderCell(props: TableHeaderCellProps) {
  const { className, children, ...rest } = props;

  return (
    <th {...rest} className={cn(" ", className)}>
      {children}
    </th>
  );
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export function TableRow(props: TableRowProps) {
  const { className, children, ...rest } = props;

  return (
    <tr {...rest} className={cn(" ", className)}>
      {children}
    </tr>
  );
}
