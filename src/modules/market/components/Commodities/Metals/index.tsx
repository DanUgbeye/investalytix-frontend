import Blog from "./Blog";
import { FiChevronDown } from "react-icons/fi";

export default function Metals() {
  return (
    <div className="">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>

      <button className="mx-auto my-16 flex items-center gap-2 rounded border border-black px-4 py-2">
        LOAD MORE
        <FiChevronDown className="h-6 w-6" />
      </button>

      <section className="flex flex-col items-center py-10">
        <h2 className="text-4xl font-bold">Subscribe to our newsletter</h2>
        <p className="mt-6 text-lg">
          Sign up for free newsletters and get more Investalytix delivered to
          your inbox
        </p>
        <form className="mt-8 flex w-[90%] items-center justify-center gap-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-[60%] rounded border border-[#505050] p-3"
          />
          <button className="whitespace-nowrap rounded bg-primary-base px-6 py-3 text-white">
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}
