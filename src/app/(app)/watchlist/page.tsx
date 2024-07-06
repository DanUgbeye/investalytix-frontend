import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watchlist | Investalytix",
};

export default function WatchlistPage() {
  return (
    <main className="min-h-[min(calc(100dvh-90px),40rem)]">
      <Container className="py-10">Watchlist Page</Container>
    </main>
  );
}
