import PAGES from "@/data/page-map";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <Container className="sm:px-6 xl:px-6">
        <div className=" ">
          <div className="flex flex-wrap justify-between gap-10 py-6 md:gap-20 lg:gap-40">
            <div className="">
              <Link href={PAGES.HOME}>
                <Image
                  src="/assets/logo/logo-with-text.svg"
                  alt="Logo"
                  className="w-auto"
                  height={25}
                  width={170}
                    priority
                sizes="lg"
                />
              </Link>
            </div>

            <div className="flex flex-grow flex-wrap gap-10 sm:justify-between">
              {/* visit */}
              <div className="flex flex-col gap-4 capitalize">
                <p className="text-lg font-bold capitalize">Visit</p>
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
                <p className="text-lg font-bold capitalize">products</p>
                <Link className="text-hover-focus" href={PAGES.CHART}>
                  chart
                </Link>
                <Link
                  className="text-hover-focus"
                  href={PAGES.ECONOMIC_CALENDAR}
                >
                  economic calendar
                </Link>
              </div>
              {/* news letter */}
              <div className="max-sm:flex-grow">
                <p className="text-2xl max-sm:text-center sm:max-w-[25ch]">
                  Join 50,000+ investors for a FREE market brief
                </p>
                <form className="mt-6 overflow-hidden rounded max-sm:mx-auto max-sm:w-fit max-xs:w-full sm:mx-auto sm:w-fit">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className="rounded-l border border-r-0 border-white/40 bg-white/20 px-4 py-3 outline-none max-xs:mx-auto max-xs:block max-xs:w-[90%] max-xs:rounded-r max-xs:border-r"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="h-full rounded-r border-y border-y-primary-base bg-primary-base px-4 py-3 text-base font-medium max-xs:mx-auto max-xs:mt-6 max-xs:block max-xs:rounded-l"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-6 border-t border-white/20 py-6">
            <p className="max-sm:flex-grow max-sm:text-center">
              &copy; {new Date().getFullYear()} Investalytix
            </p>

            {/* legal */}
            <div className="flex flex-row justify-center gap-4 capitalize max-md:flex-col max-sm:flex-grow xs:gap-20 md:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-4 xs:gap-20">
                <Link className="text-hover-focus" href={PAGES.CHART}>
                  Terms and conditions
                </Link>
                <Link className="text-hover-focus" href={PAGES.PRIVACY_POLICY}>
                  privacy policy
                </Link>
                <Link className="text-hover-focus" href={PAGES.CONTACT}>
                  contact
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link
                  href="https://www.facebook.com/investalytix01"
                  target="_blank"
                >
                  <FiFacebook />
                </Link>
                <Link href="https://x.com/investalytix" target="_blank">
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.instagram.com/investalytix1/"
                  target="_blank"
                >
                  <FiInstagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/investalytix1/"
                  target="_blank"
                >
                  <FiLinkedin />
                </Link>
                <Link
                  href="https://truthsocial.com/@investalytix"
                  target="_blank"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth={1}
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit={10}
                      strokeDashoffset={0}
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <rect x={3} y={6} width={11} height={10} />
                        <rect x={34} y={33} width={11} height={10} />
                        <path d="M18,6v37h11v-27h16v-10z" />
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
