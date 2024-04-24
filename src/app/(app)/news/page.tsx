import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <Container>
      <h1 className="py-10 text-center text-4xl font-semibold md:py-14 md:text-5xl lg:py-20 lg:text-6xl">
        News
      </h1>

      <div className="gap-10 lg:gap-5 grid lg:grid-cols-[2fr,1fr] lg:overflow-hidden">
        <div className="grid gap-5 lg:grid-cols-[3fr,1fr]">
          <div className="relative h-[500px] lg:h-full">
            {/* <div className={`relative h-full w-full  overflow-hidden`}> */}
            <Image
              src="/images/news1.jpg"
              alt=""
              fill
              className="object-cover"
            />
            {/* </div> */}

            {/*  */}
            <div className="absolute bottom-0 left-0 right-0 h-fit bg-gradient-to-b from-transparent to-black to-30% p-5 pt-20 text-white/80">
              <Link
                href=""
                className="text-3xl font-semibold hover:underline focus:underline"
              >
                China's Xiaomi is selling more EVs than expected, raising hopes
                it can break even sooner
              </Link>

              <div className="my-5 h-[0.5px] w-full bg-white/80"></div>

              <Link
                href=""
                className="font-semibold hover:underline focus:underline"
              >
                Nikkei leads Asian markets as Wall Street continues rally;
                Australia inflation slows for fifth straight quarter
              </Link>
            </div>
          </div>
          <div className="flex h-fit justify-between gap-5 lg:flex-col">
            <Link href="" className="hover:underline focus:underline">
              <div className={`relative aspect-square w-full overflow-hidden`}>
                <Image
                  src="/images/news1.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-semibold leading-tight">
                'Chaotic era' for Asian currencies: Bank of America is not
                bullish on any of them
              </p>
            </Link>
            <Link href="" className="hover:underline focus:underline">
              <div className={`relative aspect-square w-full overflow-hidden`}>
                <Image
                  src="/images/news1.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-semibold leading-tight">
                'Chaotic era' for Asian currencies: Bank of America is not
                bullish on any of them
              </p>
            </Link>
          </div>
        </div>
        <div className="grid-rows-[max-content,1fr] gap-4 lg:grid lg:overflow-hidden">
          <p className="text-3xl font-bold">Latest News</p>
          <div className="relative lg:overflow-hidden">
            <div className="lg:absolute lg:inset-0 lg:overflow-auto">
              <LatestNews />
              <LatestNews />
              <LatestNews />
              <LatestNews />
              <LatestNews />
              <LatestNews />
            </div>

            <div className="pointer-events-none from-transparent via-transparent via-80% to-white to-100% lg:absolute lg:inset-0 lg:bg-gradient-to-b dark:to-black"></div>
          </div>
        </div>
      </div>

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

function LatestNews() {
  return (
    <div className="border-b border-black/20 p-4 dark:border-b-white/20">
      <p className="text-sm font-bold">11 MIN AGO</p>
      <Link href="" className="hover:underline focus:underline">
        World&apos;s largest wealth fund issues inflation warning on hot
        commodity markets
      </Link>
    </div>
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
          <p className="white-text font-extrabold text-[#020224] lg:text-xl">
            Cardinal Health Started With Underweight at Wells Fargo, Shares Drop
            6%
          </p>
          {!latest && (
            <p className="white-text flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
              <span className="">ADBE</span>
              <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
              <span className="whitespace-nowrap">14 December, 2023</span>
            </p>
          )}
        </div>
        <p className="white-text mt-4 text-sm text-[#4B4646] lg:mt-8 lg:text-base">
          Adobe system our appointment management solution streamlines
          scheduling for real estate professionals, enhancing coordination
          between agents and clients for smoother property transactions and
          improved customer experiences.
        </p>

        {latest && (
          <p className="white-text mt-8 flex flex-nowrap items-center gap-2 text-sm font-medium text-[#565555] lg:text-base">
            <span className="">ADBE</span>
            <span className="inline-block h-1 w-1 bg-[#0097F4]"></span>
            <span className="whitespace-nowrap">14 December, 2023</span>
          </p>
        )}
      </div>
    </div>
  );
}
