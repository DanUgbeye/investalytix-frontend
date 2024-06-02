import PAGES from "@/data/page-map";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export default function Footer() {
  return (
    <Container className="max-w-[110rem] sm:px-6 xl:px-6">
      <footer>
        <div className="flex flex-wrap justify-between gap-10 py-6 md:gap-20 lg:gap-40">
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

          <div className="flex flex-grow flex-wrap sm:justify-between  gap-10">
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
            {/* news letter */}
            <div className="max-sm:flex-grow">
              <p className="sm:max-w-[25ch] text-2xl max-sm:text-center">
                Join 50,000+ investors for a FREE market brief
              </p>
              <form className="mt-6 overflow-hidden rounded mx-auto max-sm:w-fit max-sm:mx-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="rounded-l border border-r-0 border-black/20 bg-black/10 px-4 py-3 outline-none dark:border-white/40 dark:bg-white/20"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="h-full rounded-r border-y border-y-primary-base bg-primary-base px-4 py-3 text-base font-medium"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-black/20 py-6 dark:border-white/20 flex flex-wrap gap-6 justify-between">
          <p className="max-sm:text-center max-sm:flex-grow">&copy; {new Date().getFullYear()} Investalytix</p>

          {/* legal */}
          <div className="flex gap-20 capitalize max-sm:flex-grow max-sm:justify-between">
            <Link className="text-hover-focus" href={PAGES.CHART}>
              Terms and conditions
            </Link>
            <Link className="text-hover-focus" href={PAGES.ECONOMIC_CALENDAR}>
              privacy policy
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  );
}
