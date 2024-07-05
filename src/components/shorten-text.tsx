import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";

interface Props extends Omit<HTMLAttributes<HTMLParagraphElement>, "children"> {
  text?: string;
  rowHeight?: number;
  rowLimit?: number;
}

export default function ShortenText(props: Props) {
  const { text, rowLimit = 3, rowHeight = 24, className, ...rest } = props;
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <p
      {...rest}
      className={cn(" relative flex flex-col ", className)}
      style={{
        maxHeight: expanded ? "none" : `${rowHeight * rowLimit}px`,
        overflow: "hidden",
      }}
    >
      <span
        className=" z-[1]"
        style={{
          maxHeight: expanded ? "none" : `${rowHeight * rowLimit}px`,
          overflow: "hidden",
          lineHeight: `${rowHeight}px`,
        }}
      >
        {text}
      </span>

      <button
        onClick={toggleExpanded}
        className={cn(" text-sm w-fit font-bold text-blue-600 hover:text-blue-700 ", {
          " absolute bottom-0 right-0 z-[2] bg-gradient-to-r from-transparent via-white via-[15%] to-white pl-10 pr-2 dark:via-black dark:to-black ":
            !expanded,
        })}
      >
        Show {!expanded ? "more" : "less"}
      </button>
    </p>
  );
}
