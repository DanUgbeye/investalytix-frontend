import PAGES from "@/data/page-map";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export default function Footer() {
  return (
    <Container className=" max-w-[110rem] sm:px-6 xl:px-6 ">
      <footer>
        <div className="flex flex-wrap gap-10 py-6 md:gap-20 lg:gap-40">
          <div className="">
            <Link href={PAGES.HOME}>
              <Image
                src="/assets/logo/logo-with-text.svg"
                alt="Logo"
                height={25}
                width={170}
              />
            </Link>
          </div>

          <div className="flex flex-grow flex-wrap justify-between gap-10">
            {/* visit */}
            <div className="flex flex-col gap-4 capitalize">
              <p className="text-xs font-bold uppercase">Visit</p>
              <Link className="text-hover-focus" href={PAGES.ABOUT_US}>
                About us
              </Link>
              <Link className="text-hover-focus" href={PAGES.PRICING}>
                pricing
              </Link>
              <Link className="text-hover-focus" href={PAGES.NEWS}>
                News
              </Link>
              <Link className="text-hover-focus" href={PAGES.MARKETS}>
                markets
              </Link>
            </div>
            {/* products */}
            <div className="flex flex-col gap-4 capitalize">
              <p className="text-xs font-bold uppercase">products</p>
              <Link className="text-hover-focus" href={PAGES.CHART}>
                chart
              </Link>
              <Link className="text-hover-focus" href={PAGES.ECONOMIC_CALENDAR}>
               economic calendar
              </Link>
            </div>
            {/* legal */}
            <div className="flex flex-col gap-4 capitalize">
              <p className="text-xs font-bold uppercase">legal</p>
              <Link className="text-hover-focus" href={PAGES.CHART}>
                Terms and conditions
              </Link>
              <Link className="text-hover-focus" href={PAGES.ECONOMIC_CALENDAR}>
                privacy policy
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-black/20 py-6 dark:border-white/20">
          <p className="text-center">&copy; {new Date().getFullYear()} Investalytix</p>
        </div>
      </footer>
    </Container>
  );
}
