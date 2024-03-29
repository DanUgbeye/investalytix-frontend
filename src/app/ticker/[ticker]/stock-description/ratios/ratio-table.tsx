import Mapper from "@/components/mapper";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { LineChart } from "lucide-react";

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
      <div className=" flex w-full items-center justify-between bg-[rgb(2,2,36)] px-5 py-4  text-white ">
        <h5 className="   ">{ratio.name}</h5>
        <LineChart className=" size-5 " />
      </div>

      <div className=" w-full ">
        <Mapper
          list={ratio.fields}
          component={(props) => {
            const { item } = props;

            return (
              <div className=" grid grid-cols-[1fr,auto] items-center justify-between gap-x-3 border-b px-2 py-3 text-sm ">
                <span className=" ">{item.label}</span>
                <span className=" font-bold ">{item.value}</span>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
