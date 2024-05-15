import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watchlist | Investalytix",
};

export default function WatchlistPage() {
  return (
    <main className=" min-h-[calc(100dvh-90px)] ">
      <Container className=" py-10 ">Watchlist Page</Container>
    </main>
  );
}
