import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const tableHeaderCellVariants = cva(
  " sticky left-0 bg-white dark:bg-black group-hover:bg-inherit " +
    " [&>*:first-child]:border-r p-0 [&>*:first-child]:px-4 [&>*:first-child]:py-2 [&>*:first-child]:flex [&>*:first-child]:h-full [&>*:first-child]:items-center ",
  {
    variants: {
      scrolled: {
        true: "  [&>*:first-child]:dark:border-main-gray-800 ",
        false:
          "  [&>*:first-child]:border-r-transparent [&>*:dark:first-child]:border-r-transparent ",
      },
      highlight: {
        true: " bg-[#F0F3FA] dark:bg-black ",
        false: "",
      },
    },
    defaultVariants: { scrolled: false, highlight: false },
  }
);

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn("w-full caption-bottom text-sm", className)}
    {...props}
  />
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(" ", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn(" ", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-gray-100/50 font-medium dark:bg-gray-800/50 [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    highlightPattern?: "odd" | "even" | "current" | "none";
    headerRow?: boolean;
  }
>(({ className, highlightPattern = "odd", headerRow, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-0 hover:bg-main-gray-200 data-[state=selected]:bg-gray-100 dark:border-t dark:border-solid dark:border-main-gray-900 dark:hover:bg-main-gray-800 dark:data-[state=selected]:bg-main-gray-800",
      {
        " odd:bg-[#F0F3FA] dark:odd:bg-transparent ":
          highlightPattern === "odd" && !headerRow,
        "  even:bg-[#F0F3FA] dark:even:bg-transparent ":
          highlightPattern === "even" && !headerRow,
        "  bg-[#F0F3FA] dark:bg-transparent ": highlightPattern === "current",
        " border-t border-solid bg-transparent hover:bg-transparent dark:hover:bg-transparent ":
          headerRow,
      },
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 py-2 text-left align-middle text-sm font-medium capitalize text-main-gray-400 dark:text-main-gray-500 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-4 py-2 align-middle text-sm [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
};

