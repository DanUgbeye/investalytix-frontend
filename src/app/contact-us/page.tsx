"use client";
import { FormLabel } from "@/components/fom";
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
    <main className="mx-auto min-h-screen grid-cols-[1fr,1fr] md:grid">
      <div className="px-14 py-24">
        <h1 className="text-6xl sm:text-7xl font-bold lg:text-8xl">
          Connect with{" "}
          <span className="text-primary-base dark:text-primary-light">us</span>
        </h1>
        <p className="mt-7 text-lg sm:text-xl md:text-2xl">
          We're always here to help and answer any questions you might have.
          Please fill out the form below, and we'll get back to you as soon as
          possible.
        </p>

        <form className="mt-7">
          <div className="flex flex-col md:flex-row gap-7">
            <div className="w-full">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Enter your fullname"
                className="mt-3"
              />
            </div>
            <div className="w-full">
              <FormLabel htmlFor="name">Phone (optional)</FormLabel>
              <Input
                id="name"
                placeholder="Enter your phone number"
                className="mt-3"
              />
            </div>
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="name">Email</FormLabel>
            <Input
              id="name"
              placeholder="Enter your Investalytix account email."
              className="mt-3"
            />
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="how">How can we help you?</FormLabel>

            <select
              id="name"
              // placeholder="Enter your phone number"
              className="mt-3 flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            >
              <option value="">option 1</option>
              <option value="">option 2</option>
              <option value="">option 3</option>
            </select>
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="message">Message</FormLabel>
            <textarea
              name="message"
              id="message"
              className="mt-3 flex h-10 min-h-[200px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            ></textarea>
          </div>

          <div className="mt-7">
            {/* <File /> */}
          </div>

          <Button type="submit" className="mt-3">
            Submit
          </Button>
        </form>
      </div>
      <div className="bg-[url('/images/contact-us.jpg')] bg-cover bg-left bg-no-repeat md:relative">
        <button
          onClick={goBack}
          className="absolute right-5 top-5 inline-block rounded-full bg-primary-base p-2"
        >
          <FiArrowLeft className="size-6 text-white md:size-10" />
        </button>
      </div>
    </main>
  );
}
