import { Container } from "@/components/container";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Image from "next/image";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="pt-24">
      <MarketHeader name="Economic calendar" active="ECONOMY"/>

      {children}
    </Container>
  );
}
