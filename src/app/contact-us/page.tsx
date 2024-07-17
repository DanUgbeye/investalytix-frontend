"use client";
import { FormLabel } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiChevronLeft } from "react-icons/fi";

export default function ContactUsPage() {
  const [file, setFile] = useState();
  function goBack() {
    window.history.back();
  }
  return (
    <main className="relative mx-auto grid-cols-2 md:grid 2xl:grid-cols-[2fr,3fr]">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-14">
        <h1 className="text-5xl font-bold sm:text-7xl lg:text-8xl">
          Connect with{" "}
          <span className="text-primary-base dark:text-primary-light">us</span>
        </h1>
        <p className="mt-7 text-lg sm:text-lg xl:text-2xl">
          We're always here to help and answer any questions you might have.
          Please fill out the form below, and we'll get back to you as soon as
          possible.
        </p>

        <form className="mt-20">
          <div className="flex flex-col gap-7 md:flex-row">
            <div className="w-full">
              <FormLabel htmlFor="name" className="md:text-base xl:text-xl">
                Name
              </FormLabel>
              <Input
                id="name"
                placeholder="Enter your fullname"
                className="mt-3 h-fit px-4 py-3 md:text-base"
              />
            </div>
            <div className="w-full">
              <FormLabel htmlFor="phone-no" className="md:text-base xl:text-xl">
                Phone (optional)
              </FormLabel>
              <Input
                id="name"
                placeholder="Enter your phone number"
                className="mt-3 h-fit px-4 py-3 md:text-base"
              />
            </div>
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="email" className="md:text-base xl:text-xl">
              Email
            </FormLabel>
            <Input
              id="name"
              placeholder="Enter your Investalytix account email."
              className="mt-3 h-fit px-4 py-3 md:text-base"
            />
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="how" className="md:text-base xl:text-xl">
              How can we help you?
            </FormLabel>

            <select
              id="name"
              // placeholder="Enter your phone number"
              className="mt-3 flex h-fit w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            >
              <option value="">option 1</option>
              <option value="">option 2</option>
              <option value="">option 3</option>
            </select>
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="message" className="md:text-base xl:text-xl">
              Message
            </FormLabel>
            <textarea
              name="message"
              id="message"
              className="mt-3 flex h-fit min-h-[200px] w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            ></textarea>
          </div>

          <div className="mt-7">{/* <File /> */}</div>

          <Button type="submit" className="mt-3">
            Submit
          </Button>
        </form>
      </div>
      <div className="md:relative">
        <div className="top-0 w-full bg-cover bg-center bg-no-repeat md:sticky md:h-screen">
          <Image
            src="/images/contact-us-3.jpg"
            fill
            alt=""
            className="hidden object-cover object-center md:block"
            priority
            sizes="100%"
          />
          <button
            onClick={goBack}
            className="absolute right-5 top-5 inline-block rounded-full bg-primary-base p-2"
          >
            <FiArrowLeft className="size-6 text-white md:size-10" />
          </button>
        </div>
      </div>
    </main>
  );
}
