"use client";
import Image from "next/image";
import MarketOverview from "./Overview";
import { Container } from "@/components/container";

export default function MarketPage() {
  return (
    <main>
      <Container>
        <div className="relative mb-4 h-[170px] w-full lg:mb-12">
          <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
        </div>

      <section>
        <MarketOverview />
      </section>
      </Container>
    </main>
  );
}
