import Image from "next/image";

export default function EconomicEvent() {
  const Event = (
    <div className="flex w-full gap-2">
      <div className="relative h-[110px] w-28 flex-shrink-0 overflow-hidden bg-red-500">
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="">
        <p className="text-sm font-bold text-[#000000] white-text">
          Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
          6%
        </p>
        <p className="mt-8 flex items-center gap-1 text-sm text-[#565555] white-text">
          <span className="">ADBE</span>
          <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
          <span className="whitespace-nowrap">14 December, 2023</span>
        </p>
      </div>
    </div>
  );
  return (
    <div>
      <header className="relative mb-4">
        <p className="text-2xl font-bold text-[#2A3037]  white-text">
          Top Economic Event
        </p>

        <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/30"></div>
      </header>

      <div className="flex flex-col gap-6">
        {Event}
        {Event}
      </div>
    </div>
  );
}
