import { FormLabel } from "@/components/fom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiChevronLeft } from "react-icons/fi";

export default function ContactUsPage() {
  return (
    <main className="mx-auto md:grid min-h-screen grid-cols-[1fr,1fr]">
      <div className="ml-auto max-w-[600px] px-14 py-24">
        <h1 className="text-7xl lg:text-8xl font-bold">
          Connect with{" "}
          <span className="text-primary-base dark:text-primary-light">us</span>
        </h1>
        <p className="mt-7 text-xl md:text-2xl">
          We're always here to help and answer any questions you might have.
          Please fill out the form below, and we'll get back to you as soon as
          possible.
        </p>

        <form className="mt-7">
          <div className="flex gap-7">
            <div className="w-full">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Enter your fullname" className="mt-3"/>
            </div>
            <div className="w-full">
              <FormLabel htmlFor="name">Phone (optional)</FormLabel>
              <Input id="name" placeholder="Enter your phone number" className="mt-3"/>
            </div>
          </div>

          <div className="mt-7">
            <FormLabel htmlFor="name">Email</FormLabel>
            <Input
              id="name"
              placeholder="Enter your Investalytix account email."
            className="mt-3"/>
          </div>

          <div className="mt-7"></div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="bg-[url('/images/contact-us.jpg')] bg-cover bg-left bg-no-repeat md:relative">
        <Link href="/" className="bg-primary-base inline-block p-2 rounded-full absolute top-5 right-5">
          <FiArrowLeft className="size-6 md:size-10 text-white"/>
        </Link>
      </div>
    </main>
  );
}
