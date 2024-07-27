"use client";

import { Container } from "@/components/container";
import { getSubsriptionRoute } from "@/route";
import { BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace(getSubsriptionRoute());
    }, 2_000);
  }, []);

  return (
    <main className="">
      <Container className="h-fit pb-10 pt-10 md:pt-20">
        <section className="mx-auto w-full max-w-md space-y-6 rounded-md px-5 pb-16 pt-10">
          <center className=" ">
            <BadgeCheck
              strokeWidth={1.5}
              className="size-28 text-main-green-light dark:text-main-green-dark"
            />
          </center>

          <div className="space-y-1">
            <div className="text-center text-2xl font-bold">
              Transaction successful
            </div>

            <p className="text-center text-sm font-medium text-neutral-400 sm:text-sm">
              You will be redirected shortly
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
