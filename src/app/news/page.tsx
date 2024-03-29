import { Container } from "@/components/container";
import Image from "next/image";

export default function NewsPage() {
  return (
    <Container>
      <h1 className="text-4xl md:text-5xl md:py-14 lg:text-6xl font-semibold text-center py-10 lg:py-20">News</h1>
      <div className="grid">
        <News latest />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
    </Container>
  );
}

function News({ latest = false }: { latest?: boolean }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[200px,1fr] gap-5 border-b border-[#DCDCDC] py-4 lg:grid-cols-[max-content,1fr] lg:grid-rows-[auto,auto] lg:py-8">
      <div
        className={`relative h-full max-h-[200px] w-full overflow-hidden lg:w-80 ${latest ? "lg:w-96" : "w-80"}`}
      >
        <Image src="/images/news1.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="">
        <div className="flex flex-wrap items-start justify-between gap-2 xl:gap-5">
          <p className="font-extrabold text-[#020224] lg:text-xl dark:text-white">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>
          {!latest && (
            <p className="flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base dark:text-white">
              <span className="">ADBE</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">14 December, 2023</span>
            </p>
          )}
        </div>
        <p className="mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base dark:text-white">
          Adobe system our appointment management solution streamlines
          scheduling for real estate professionals, enhancing coordination
          between agents and clients for smoother property transactions and
          improved customer experiences.
        </p>

        {latest && (
          <p className="mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base dark:text-white">
            <span className="">ADBE</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        )}
      </div>
    </div>
  );
}
