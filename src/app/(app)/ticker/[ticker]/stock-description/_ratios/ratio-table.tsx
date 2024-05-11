import { cn } from "@/lib/utils";
import { LineChart } from "lucide-react";
import { HTMLAttributes } from "react";

export type Ratio = {
  name: string;
  fields: { label: string; value: string }[];
};

export interface RatioTableProps extends HTMLAttributes<HTMLDivElement> {
  ratio: Ratio;
}

export default function RatioTable(props: RatioTableProps) {
  const { ratio, className, ...rest } = props;

  return (
    <div {...rest} className={cn(" w-full ", className)}>
      <div className=" flex w-full items-center justify-between px-5 py-4 th ">
        <h5 className="   ">{ratio.name}</h5>
        <LineChart className=" size-5 " />
      </div>

      <div className=" w-full ">
        {ratio.fields.map((item, index) => {
          return (
            <div
              key={`${item.label}-${index}`}
              className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 px-2 py-3 text-sm even:bg-main-gray-100  dark:even:bg-main-gray-900 "
            >
              <span className=" ">{item.label}</span>
              <span className=" font-bold ">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
