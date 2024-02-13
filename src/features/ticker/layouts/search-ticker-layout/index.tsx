import Link from "next/link";
import React from "react";
import { MdOutlineInsertChart } from "react-icons/md";
import TickerNavLink from "../../components/ticker-nav-link";

export interface SearchTickerLayoutProps {
  isLoading?: boolean;
  data: any;
}

export default function SearchTickerLayout(props: SearchTickerLayoutProps) {
  return (
    <section className=" grid grid-cols-[minmax(15rem,auto),1fr] ">
      <aside className="  ">
        <div className=" py-4 ">
          <div className=" flex flex-col ">
            <div className=" px-4 ">
              <div className=" font-bold text-primary-base ">AAPL</div>
              <div className=" text-2xl font-bold ">Apple INC</div>
            </div>

            <div className=" space-y-1 px-4 py-2 ">
              <div className=" flex items-center space-x-1.5 ">
                <span className=" font-bold ">$19.88</span>
                <span className=" text-xs font-bold text-[#079516] ">
                  +1.59 (+8.69%)
                </span>
              </div>

              <div className=" text-xs text-gray-400 ">
                At close: December 18 04:00 PM EST
              </div>
            </div>

            <div className=" space-y-1 bg-gray-100 px-4 py-2 ">
              <div className=" flex items-center space-x-1.5 ">
                <span className=" font-bold ">$20.56</span>
                <span className=" text-xs font-bold text-red-500 ">
                  -0.68 (-0.42%)
                </span>
              </div>

              <div className=" text-xs text-gray-400 ">
                After hours: January 12 07:59 PM EST
              </div>
            </div>
          </div>

          <div className=" divide-y border-l ">
            <Link
              href={""}
              className=" flex h-14 items-center gap-x-3 px-4 duration-300 hover:text-primary-base "
            >
              <MdOutlineInsertChart className=" size-6" />
              <span className=" text-sm font-bold ">Stock Description</span>
            </Link>

            <TickerNavLink
              icon={MdOutlineInsertChart}
              tabName="stock-description"
            >
              Stock Description
            </TickerNavLink>
          </div>
        </div>
      </aside>

      <main className="  "></main>
    </section>
  );
}
