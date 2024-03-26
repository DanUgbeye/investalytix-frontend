import Image from "next/image";

export default function MarketEvent() {
  return (
    <div className="flex w-full gap-2">
      <div className="relative h-[110px] w-28 flex-shrink-0 overflow-hidden bg-red-500">
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="">
        <p className="text-sm font-bold text-[#000000] dark:text-white">
          Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
          6%
        </p>
        <p className="mt-8 flex items-center gap-1 text-sm text-[#565555] dark:text-white">
          <span className="">ADBE</span>
          <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
          <span className="whitespace-nowrap">14 December, 2023</span>
        </p>
      </div>
    </div>
  );
}
