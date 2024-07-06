import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Investalytix",
};

export default function SettingsPage() {
  return (
    <main className="min-h-[min(calc(100dvh-90px),40rem)]">
      <Container className="py-10">Settings Page</Container>
    </main>
  );
}
