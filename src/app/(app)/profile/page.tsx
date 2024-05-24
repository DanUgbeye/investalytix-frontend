import { Container } from "@/components/container";
import { FormLabel } from "@/components/fom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile | Investalytix",
};

type PageProps = {
  params: {};
  searchParams: {
    active?: string;
  };
};

export default function ProfilePage(props: PageProps) {
  const { active = "profile" } = props.searchParams;
  return (
    <main className=" min-h-[min(calc(100dvh-90px),40rem)] ">
      <Container className=" py-10 ">
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-primary-base"></div>
          <p className="text-xl font-medium">John Doe</p>
        </div>

        {/* menu */}
        <div className="mt-5 flex justify-center gap-5 bg-main-gray-100 py-2 dark:bg-main-gray-700">
          <Link
            className={`text-hover-focus text-xs font-semibold uppercase outline-none ${active === "profile" ? "text-primary-base" : ""}`}
            href="?active=profile"
          >
            Profile
          </Link>
          <Link
            className="text-hover-focus text-xs font-semibold uppercase outline-none"
            href="?active=subscription and billing"
          >
            Subscription and billing
          </Link>
        </div>

        {active === "subscription and billing" ? (
          <div className="mx-auto flex w-full flex-col gap-2 py-10">
            <h3 className="font-semibold">MY PLAN</h3>
            <div className="mb-10 flex flex-wrap gap-10 items-center justify-between rounded-lg border p-6">
              <div className="">
                <p className="text-xs uppercase">current plan</p>
                <p className="text-xl font-bold">Basic Free</p>
              </div>

              <Button>Change plan</Button>
            </div>

            <h3 className="font-semibold">BILLING HISTORY</h3>

            <div className="overflow-auto">
              <table>
                <thead>
                  <tr className="w-full">
                    <th className="th p-2 text-left capitalize">date</th>
                    <th className="th p-2 text-left capitalize">action</th>
                    <th className="th p-2 text-left capitalize">
                      transaction id
                    </th>
                    <th className="th p-2 text-left capitalize">total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd:bg-[#F9F9F9] dark:odd:bg-transparent">
                    <td className="p-2 text-left whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </td>
                    <td className="p-2 text-left">subscription</td>
                    <td className="p-2 text-left">729374691937</td>
                    <td className="p-2 text-left">$10,000</td>
                  </tr>
                  <tr className="odd:bg-[#F9F9F9] dark:odd:bg-transparent">
                    <td className="p-2 text-left whitespace-nowrap">
                      {moment("2024/3/5").format("MMM Do, YYYY")}
                    </td>
                    <td className="p-2 text-left">subscription</td>
                    <td className="p-2 text-left">729374691937</td>
                    <td className="p-2 text-left">$10,000</td>
                  </tr>
                  <tr className="odd:bg-[#F9F9F9] dark:odd:bg-transparent">
                    <td className="p-2 text-left whitespace-nowrap">
                      {moment("2024/2/23").format("MMM Do, YYYY")}
                    </td>
                    <td className="p-2 text-left">subscription</td>
                    <td className="p-2 text-left">729374691937</td>
                    <td className="p-2 text-left">$10,000</td>
                  </tr>
                  <tr className="odd:bg-[#F9F9F9] dark:odd:bg-transparent">
                    <td className="p-2 text-left whitespace-nowrap">
                      {moment("2024/1/5").format("MMM Do, YYYY")}
                    </td>
                    <td className="p-2 text-left">subscription</td>
                    <td className="p-2 text-left">729374691937</td>
                    <td className="p-2 text-left">$10,000</td>
                  </tr>
                  <tr className="odd:bg-[#F9F9F9] dark:odd:bg-transparent">
                    <td className="p-2 text-left whitespace-nowrap">
                      {moment("2023/1/5").format("MMM Do, YYYY")}
                    </td>
                    <td className="p-2 text-left">subscription</td>
                    <td className="p-2 text-left">729374691937</td>
                    <td className="p-2 text-left">$10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          // profile
          <div className="mx-auto flex w-full max-w-lg flex-col gap-2 py-10">
            <h3 className="font-semibold">PRIVATE DETAILS</h3>
            {/* first name */}
            <div className="">
              <FormLabel htmlFor="firstname">First name</FormLabel>
              <Input
                id="firstname"
                className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
              />
            </div>
            {/* last name */}
            <div className="">
              <FormLabel htmlFor="firstname">Last name</FormLabel>
              <Input
                id="firstname"
                className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
              />
            </div>
            {/* email */}
            <div className="">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button className="w-fit">Save</Button>
              <Button className="w-fit" variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
