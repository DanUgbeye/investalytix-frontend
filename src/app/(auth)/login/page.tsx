import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";

export default function LoginPage() {
  return (
    <>
      <Image
        src="/images/auth-bg.png"
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        className=" fixed -top-[15%] left-0 right-0 h-auto w-full max-md:-top-0 lg:top-0"
      />

      <main className="flex items-center justify-center px-5 sm:px-10 py-20">
        <div className="z-10 flex w-full flex-col items-center">
          <Link href="/">
            <Image
              src="/assets/logo/logo-with-text.svg"
              alt="Logo"
              height={40}
              width={200}
            />
          </Link>

          <form
            action=""
            className="auth__card__shadow mt-10 w-full max-w-md rounded bg-white px-8 py-8 md:max-w-xl md:px-16 md:py-12"
          >
            <h1 className="mb-4 text-2xl font-bold text-[#3C4257] max-sm:max-w-[15ch]">
              Sign in to your account
            </h1>

            <div className="w-full lg:min-w-[400px]">
              <label htmlFor="email" className="mb-3 text-[#3C4257]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@investalix.com"
                className="w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none"
              />
            </div>
            <div className="my-8 w-full lg:min-w-[400px]">
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="password" className="text-[#3C4257]">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#635CFF]"
                >
                  Forgot your password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className="w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1">
              <div className="relative">
                <ImCheckmark className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white" />
                <input
                  type="checkbox"
                  name="stay-signed-in"
                  id="stay-signed-in"
                  className="h-4 w-4 appearance-none rounded bg-gray-100 checked:bg-primary-base"
                />
              </div>
              <p className="text-sm text-[#3C4257]">
                Stay signed in for a week
              </p>
            </div>

            <input
              type="submit"
              value="Continue"
              className="mt-7 w-full cursor-pointer rounded bg-primary-base py-4 text-white"
            />
          </form>

          <p className="mb-6 mt-8 text-[#4F566B] dark:text-white">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#635CFF] dark:text-[#9b96ff]">
              Sign up
            </Link>
          </p>
          <p className="text-[#697386] dark:text-white">
            &copy; Investalytix · Contact · Privacy & terms
          </p>
        </div>
      </main>
    </>
  );
}
