import PAGES from "@/data/page-map";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export default function Footer() {
  return (
    <Container className=" max-w-[110rem] sm:px-6 xl:px-6 ">
      <footer>
        <div className="py-6 grid grid-cols-[1fr,3fr] gap-20">
          <Link href={PAGES.HOME}>
            <Image
              src="/assets/logo/logo-with-text.svg"
              alt="Logo"
              height={25}
              width={170}
            />
          </Link>

          <div className="">
            <div className="flex flex-col gap-4 capitalize">
              <Link className="text-hover-focus" href={PAGES.CHART}>chart</Link>
              <Link className="text-hover-focus" href={PAGES.ECONOMIC_CALENDAR}>calendar</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-black/20 py-6 dark:border-white/20">
          <p>&copy; {new Date().getFullYear()} Investalytix</p>
        </div>
      </footer>
    </Container>
  );
}
