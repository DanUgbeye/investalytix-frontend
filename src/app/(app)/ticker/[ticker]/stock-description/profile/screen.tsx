"use client";

import { CompanyOutlook } from "@/modules/ticker/types";
import appUtils from "@/utils/app-util";
import { format } from "date-fns";
import Link from "next/link";

interface ProfileScreenProps {
  ticker: string;
  outlook: CompanyOutlook;
}

export default function ProfileScreen(props: ProfileScreenProps) {
  const { ticker, outlook } = props;

  return (
    <section className=" space-y-10 pb-10 ">
      <div className=" flex flex-wrap gap-x-10 gap-y-5 xl:grid xl:w-full xl:grid-cols-[1fr,2fr] xl:flex-nowrap xl:justify-between ">
        <div className=" flex flex-col space-y-2 xl:w-full ">
          <h3 className=" text-2xl font-extrabold ">
            {outlook.profile.companyName}
          </h3>

          <div className=" max-w-60 text-sm ">{outlook.profile.address}</div>

          <div className=" flex flex-col space-y-1 text-sm text-[#125BD4] ">
            <span>{outlook.profile.phone}</span>

            <Link href={outlook.profile.website} target="_blank">
              {outlook.profile.website}
            </Link>
          </div>
        </div>

        <div className=" flex flex-wrap gap-x-10 gap-y-5 xl:w-full xl:justify-between ">
          <div className="  ">
            <table className=" text-sm ">
              <tr>
                <td className=" px-2 py-1  ">Sector:</td>
                <td className=" px-2 py-1 font-medium ">
                  {outlook.profile.sector}
                </td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Industry:</td>
                <td className=" px-2 py-1 font-medium ">
                  {outlook.profile.industry}
                </td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Full time Employees:</td>
                <td className=" px-2 py-1 font-medium ">
                  {appUtils.formatNumber(
                    Number(outlook.profile.fullTimeEmployees),
                    { style: "decimal" }
                  )}
                </td>
              </tr>
            </table>
          </div>

          <div className="  ">
            <table className=" text-sm ">
              {/* TODO INPUT VALUE */}
              <tr>
                <td className=" px-2 py-1  ">Shares Outstanding:</td>
                <td className=" px-2 py-1 font-medium ">15.6B</td>
              </tr>

              {/* TODO INPUT VALUE */}
              <tr>
                <td className=" px-2 py-1  ">Institutional Ownership:</td>
                <td className=" px-2 py-1 font-medium ">61.67%</td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Market Cap:</td>
                <td className=" px-2 py-1 font-medium ">
                  {appUtils.formatNumber(outlook.profile.mktCap, {
                    notation: "compact",
                  })}
                </td>
              </tr>

              <tr>
                <td className=" px-2 py-1  ">Last Stock Split Date:</td>
                <td className=" px-2 py-1 font-medium ">
                  {format(outlook.splitsHistory[0].date, "MMM dd, yyyy")}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className=" space-y-4 ">
        <h4 className=" text-xl font-bold ">Description</h4>

        <p className=" whitespace-pre-line text-justify ">
          {outlook.profile.description}
        </p>
      </div>

      <div className=" grid gap-10 border-2 p-10 md:grid-cols-2 dark:border-main-gray-600 ">
        {outlook.keyExecutives.map((executive, index) => (
          <div key={`${executive.title}-${index}`} className=" space-y-1 ">
            <div className=" font-medium ">{executive.name}</div>
            <div className="  ">{executive.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
