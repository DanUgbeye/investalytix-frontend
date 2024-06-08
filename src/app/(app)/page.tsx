"use client";

import { Container } from "@/components/container";
import useInput from "@/hooks/useInput";
import WithSidePanel from "@/modules/market/components/WithSidePanel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  const [query, queryOpts] = useInput("");
  const router = useRouter();

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/ticker/${query}`);
  }

  return (
    <>
      <main className="relative isolate min-h-[90dvh] w-full overflow-hidden bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat lg:min-h-[calc(100dvh_-_100px)]">
        <div className="absolute inset-0 -z-10 bg-black/70"></div>

        <Container className="z-20 mx-auto flex max-w-3xl flex-col items-center justify-center py-10 text-center text-white">
          <h1
            style={{ lineHeight: "1.2" }}
            className="text-4xl font-bold max-xs:text-center md:text-5xl  xl:text-6xl"
          >
            Integrating Macro, Technical Strategy, and Fundamentals
          </h1>

          <p className="mx-auto mt-5 w-3/4 text-lg font-medium  max-xs:text-center xl:mt-8 xl:text-xl">
            Providing data-driven investment decisions with a comprehensive
            suite of financial analysis tools.
          </p>

          <FiSearch className="mt-16 size-16" />
        </Container>
      </main>
      {/* <WithSidePanel>
        <></>
      </WithSidePanel> */}
    </>
  );
}
