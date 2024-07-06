import { Container } from "@/components/container";
import LatestNews from "@/modules/homepage/components/LatestNews";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Image from "next/image";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="pb-14 pt-24">
      <p className="white-text mb-10 text-center text-6xl font-extrabold capitalize">
        Economic calendar
      </p>
      {/* <MarketHeader name="Economic calendar" active="ECONOMY"/> */}

      {children}

      <LatestNews />
    </Container>
  );
}
