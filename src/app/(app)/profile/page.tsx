"use client";
import { Container } from "@/components/container";
import { FormLabel } from "@/components/fom";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@headlessui/react";
import clsx from "clsx";
import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";

// export const metadata: Metadata = {
//   title: "Profile | Investalytix",
// };

type PageProps = {
  params: {};
  searchParams: {
    q?: string;
  };
};

export default function ProfilePage(props: PageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!searchParams.has("q")) {
    router.replace("/profile?q=personal info");

    return null;
  }
  const q = searchParams.get("q");

  return (
    <>
      <div className="mb-10 border-b-[0.5px] dark:border-b-main-gray-700">
        <h1 className="mb-8 text-4xl font-extrabold capitalize md:text-6xl">
          {q}
        </h1>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 pb-5 md:gap-x-20">
          <Link
            className={`${q === "personal info" ? "text-primary-base dark:text-primary-light" : "text-hover-focus"} capitalize`}
            href="?q=personal info"
          >
            personal info
          </Link>
          <Link
            className={`${q === "subscription and billing" ? "text-primary-base dark:text-primary-light" : "text-hover-focus"} capitalize`}
            href="?q=subscription and billing"
          >
            subscription and billing
          </Link>
          <Link
            className={`${q === "watchlist" ? "text-primary-base dark:text-primary-light" : "text-hover-focus"} capitalize`}
            href="?q=watchlist"
          >
            watchlist
          </Link>
          <Link
            className={`${q === "privacy and security" ? "text-primary-base dark:text-primary-light" : "text-hover-focus"} capitalize`}
            href="?q=privacy and security"
          >
            privacy & security
          </Link>
        </div>
      </div>

      <main className="min-h-[min(calc(100dvh-90px),40rem)] pb-20">
        {q === "subscription and billing" ? (
          <div className="flex w-full max-w-7xl flex-col gap-2">
            {/* <h3 className="font-semibold">MY PLAN</h3> */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-10 rounded-lg border p-6 dark:border-main-gray-700">
              <div className="">
                <p className="text-xs uppercase">current plan</p>
                <p className="text-xl font-bold">Free plan</p>
              </div>

              <Button>Change plan</Button>
            </div>

            <h3 className="text-2xl font-semibold capitalize">
              billing history
            </h3>

            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead>date</TableHead>
                    <TableHead>action</TableHead>
                    <TableHead>transaction id</TableHead>
                    <TableHead>total</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        ) : q === "watchlist" ? (
          <div>
            {/* <h3 className="text-2xl font-semibold capitalize">watchlist</h3> */}

            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow headerRow>
                    <TableHead>date</TableHead>
                    <TableHead>action</TableHead>
                    <TableHead>transaction id</TableHead>
                    <TableHead>total</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="whitespace-nowrap">
                      {moment("2024/4/25").format("MMM Do, YYYY")}
                    </TableCell>
                    <TableCell className="">subscription</TableCell>
                    <TableCell className="">729374691937</TableCell>
                    <TableCell className="">$10,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        ) : q === "privacy and security" ? (
          <div className="flex w-full max-w-7xl flex-col gap-2">
            <h3 className="mb-4 text-2xl font-semibold capitalize">
              2-factor authentication
            </h3>

            <div className="w-fit rounded-lg border dark:border-main-gray-700">
              <div className="flex items-center gap-20 px-10 py-8 md:px-20 md:py-10">
                <div className="flex w-full max-w-lg items-center gap-5">
                  <svg
                    width={24}
                    height={40}
                    viewBox="0 0 24 40"
                    fill="none"
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_678_321)">
                      <path
                        d="M0.00108222 20.0009C0.00108222 14.8357 -0.00255524 9.67181 0.0035072 4.50665C0.00593218 2.49065 1.22691 0.948429 3.1099 0.569894C3.41788 0.50762 3.74161 0.503956 4.05686 0.503956C9.35179 0.500293 14.6455 0.497851 19.9392 0.502735C22.3982 0.505177 23.9974 2.11578 23.9974 4.59457C23.9999 14.8626 23.9999 25.1319 23.9974 35.3999C23.9974 37.8763 22.3957 39.4942 19.9417 39.4966C14.6479 39.5015 9.35422 39.5015 4.06049 39.4966C1.60399 39.4942 0.0035072 37.8787 0.00229471 35.4036C-0.00134276 30.2689 0.00229471 25.1355 0.00229471 20.0009H0.00108222ZM22.4503 19.9997C22.4503 16.0532 22.4503 12.1066 22.4503 8.16011C22.4503 6.47503 21.5422 5.56044 19.8738 5.56044C14.6249 5.56044 9.37483 5.56044 4.12597 5.56044C2.45395 5.56044 1.54943 6.47258 1.54943 8.16011C1.54943 16.0532 1.54943 23.9462 1.54943 31.8393C1.54943 33.5256 2.45637 34.4401 4.12476 34.4401C9.37362 34.4401 14.6237 34.4401 19.8726 34.4401C21.5409 34.4401 22.4491 33.5231 22.4503 31.8393C22.4503 27.8927 22.4503 23.9462 22.4503 19.9997ZM1.5858 4.74964C2.31209 4.25144 3.05898 4.00112 3.88347 4.00112C9.29602 4.00112 14.7074 4.00112 20.1199 4.00112C20.8147 4.00112 21.4633 4.17329 22.0647 4.52863C22.1763 4.59457 22.2951 4.64951 22.4224 4.71545C22.5485 3.18178 21.5943 2.06816 20.1357 2.06571C14.7086 2.05595 9.28147 2.05472 3.85437 2.06571C2.39696 2.06816 1.43061 3.20498 1.5858 4.74842V4.74964ZM22.3994 35.2375C21.3239 36.1057 20.0702 35.9995 18.8335 35.9982C13.9205 35.9958 9.00745 35.9934 4.09444 36.0007C3.2554 36.0019 2.4782 35.8273 1.76889 35.3682C1.71433 35.3328 1.644 35.3205 1.57247 35.2937C1.46698 36.8799 2.42121 37.9312 3.96349 37.9336C7.28935 37.941 10.6152 37.9361 13.9411 37.9361C16.0278 37.9361 18.1132 37.9507 20.1999 37.9288C21.6161 37.9141 22.6031 36.7199 22.3994 35.2363V35.2375Z"
                        className="fill-black dark:fill-main-gray-300"
                      />
                      <path
                        d="M11.9962 28.2964C7.47608 28.2928 3.76951 24.5612 3.76466 20.0078C3.75859 15.4397 7.49912 11.6812 12.0266 11.7032C16.5552 11.7264 20.2484 15.4654 20.2363 20.0139C20.2242 24.5697 16.514 28.3001 11.9975 28.2964H11.9962ZM18.6795 20.1909C18.8541 16.5741 15.949 13.4677 12.2121 13.2735C8.60127 13.0867 5.48881 16.038 5.32028 19.8087C5.15781 23.4378 8.04959 26.5308 11.7877 26.7274C15.3948 26.9166 18.4976 23.9738 18.6795 20.1909Z"
                        className="fill-black dark:fill-main-gray-300"
                      />
                      <path
                        d="M10.8412 21.1362C12.0549 19.9139 13.2274 18.7319 14.3999 17.5499C14.5175 17.4315 14.6291 17.3057 14.7576 17.2007C15.1068 16.9174 15.5287 16.9369 15.8209 17.241C16.1034 17.534 16.1216 17.9907 15.8173 18.3131C15.2232 18.9407 14.606 19.5464 13.9986 20.1593C13.1874 20.9775 12.3763 21.7968 11.5627 22.6125C11.0474 23.129 10.6836 23.1302 10.1744 22.621C9.54267 21.9885 8.91096 21.3548 8.2841 20.7162C7.88883 20.3132 7.86216 19.8382 8.20165 19.511C8.53751 19.1874 8.97158 19.213 9.36564 19.6074C9.85791 20.0995 10.3344 20.6099 10.84 21.1362H10.8412Z"
                        className="fill-black dark:fill-main-gray-300"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_678_321">
                        <rect
                          width={24}
                          height={39}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-bold">Phone verification</p>
                    <p className="">
                      Receive a text message on your mobile device upon signing
                      in.
                    </p>
                  </div>
                </div>
                <Radio />
              </div>

              <div className="flex items-center gap-20 border-t px-10 py-8 md:px-20 md:py-10 dark:border-t-main-gray-700">
                <div className="flex w-full max-w-lg items-center gap-5">
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_678_316)">
                      <path
                        d="M5.78189 9.47136C5.1416 6.2124 6.0974 3.54604 8.98801 1.73039C11.5716 0.107581 14.3377 0.0868139 16.9391 1.68737C19.88 3.49634 20.8574 6.1805 20.2171 9.47136C20.8868 9.47136 21.5697 9.47136 22.2525 9.47136C22.9863 9.47062 23.6692 9.64788 24.2801 10.0388C25.3689 10.7352 25.9752 11.7157 25.9844 12.9729C26.0061 15.9774 26.0022 18.982 25.9875 21.9858C25.9783 23.9112 24.3303 25.4903 22.3198 25.4933C16.1039 25.5022 9.88891 25.5022 3.6731 25.4933C1.6656 25.4903 0.0153719 23.9046 0.00841217 21.9821C-0.00318738 18.9872 -0.00241407 15.9915 0.00841217 12.9966C0.0153719 11.0593 1.66637 9.4899 3.69088 9.4721C4.38608 9.46617 5.08128 9.47136 5.78189 9.47136ZM24.1362 13.2362C23.9947 13.3281 23.9066 13.3838 23.82 13.4416C21.5325 14.9776 19.2466 16.5174 16.9561 18.049C14.5094 19.6859 11.4479 19.671 9.00657 18.0267C6.72146 16.4877 4.43248 14.9532 2.14505 13.4179C2.06308 13.363 1.97956 13.3118 1.86125 13.2362V13.5662C1.86125 16.2926 1.86125 19.0191 1.86125 21.7463C1.86125 22.993 2.61367 23.7169 3.9105 23.7169C9.97242 23.7169 16.0336 23.7169 22.0955 23.7169C23.3738 23.7169 24.1362 22.9886 24.137 21.7663C24.137 19.0302 24.137 16.2949 24.137 13.5588C24.137 13.469 24.137 13.3793 24.137 13.2362H24.1362ZM13.0076 13.0329C16.0746 13.0292 18.5716 10.6262 18.5669 7.68167C18.563 4.73867 16.0591 2.34525 12.9891 2.34896C9.92216 2.35266 7.42594 4.75424 7.4298 7.69947C7.4329 10.641 9.9384 13.0366 13.0076 13.0329ZM23.3413 11.5904C22.9948 11.3463 22.6414 11.2529 22.2571 11.2529C21.4359 11.2529 20.6138 11.2648 19.7926 11.2455C19.5181 11.2388 19.3673 11.3189 19.2188 11.5444C17.465 14.2144 13.9681 15.4397 10.8416 14.4985C9.07384 13.966 7.70355 12.9425 6.70135 11.4517C6.64026 11.3612 6.50416 11.2618 6.40131 11.2603C5.4834 11.2462 4.56471 11.247 3.6468 11.2559C3.2965 11.2596 2.97171 11.3597 2.66625 11.5829C2.76369 11.6527 2.83793 11.709 2.91449 11.7609C5.28002 13.3504 7.64555 14.9413 10.0126 16.5292C11.8809 17.7827 14.0972 17.7871 15.9694 16.5404C16.9136 15.9114 17.8532 15.2758 18.7943 14.6431C20.2976 13.6337 21.8001 12.6243 23.3405 11.5896L23.3413 11.5904Z"
                        className="fill-black dark:fill-main-gray-300"
                      />
                      <path
                        d="M12.7408 8.86491C13.2435 7.90146 13.7276 6.97584 14.2101 6.04947C14.4475 5.59408 14.6803 5.1372 14.9208 4.68403C15.1883 4.18042 15.7196 3.995 16.2029 4.22938C16.6715 4.45707 16.8409 4.97551 16.5865 5.46651C15.6809 7.21466 14.7723 8.96133 13.8567 10.705C13.5257 11.3347 12.8189 11.4408 12.2977 10.9446C11.3992 10.0902 10.506 9.23056 9.6136 8.37021C9.19601 7.96821 9.179 7.42604 9.56256 7.06039C9.94535 6.69548 10.506 6.71625 10.9282 7.11824C11.5237 7.68637 12.1137 8.25895 12.7408 8.86417V8.86491Z"
                        className="fill-black dark:fill-main-gray-300"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_678_316">
                        <rect
                          width={26}
                          height={25}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-bold">Email Verification</p>
                    <p className="">
                      Receive login codes via email before accessing your
                      account.
                    </p>
                  </div>
                </div>
                <Radio />
              </div>
            </div>
          </div>
        ) : (
          // personal info
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
            <div className="h-fit w-full border pb-5 dark:border-main-gray-700">
              <h3 className="mb-5 border-b px-8 pb-5 pt-5 font-semibold capitalize dark:border-b-main-gray-700">
                Basic info
              </h3>

              <div className="mt-4 flex flex-col gap-6 px-8">
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
                  {/* <Button className="w-fit" variant="outline">
                    Cancel
                  </Button> */}
                </div>
              </div>
            </div>

            <div className="h-fit w-full border pb-5 dark:border-main-gray-700">
              <h3 className="mb-5 border-b px-8 pb-5 pt-5 font-semibold dark:border-b-main-gray-700">
                Update password
              </h3>

              <div className="mt-4 flex flex-col gap-6 px-8">
                {/* new password */}
                <div className="">
                  <FormLabel htmlFor="new-password">New password</FormLabel>
                  <PasswordInput
                    id="new-password"
                    className="mt-1 outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                </div>
                {/* confirm new password */}
                <div className="">
                  <FormLabel htmlFor="confirm-password">
                    Confirm new password
                  </FormLabel>
                  <PasswordInput
                    id="confirm-password"
                    className="mt-1 outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button className="w-fit">Change</Button>
                  {/* <Button className="w-fit" variant="outline">
                  Cancel
                </Button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function Radio() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {/* @ts-ignore */}
      {({ checked, disabled }) => (
        <button
          className={clsx(
            "group inline-flex h-6 w-11 shrink-0 items-center rounded-full",
            checked
              ? "bg-primary-base dark:bg-primary-light"
              : "bg-gray-200 dark:bg-main-gray-700",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={clsx(
              "size-4 rounded-full bg-white transition",
              checked ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
      )}
    </Switch>
  );
}
