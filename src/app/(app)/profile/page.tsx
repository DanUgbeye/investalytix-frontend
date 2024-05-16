import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Investalytix",
};

export default function ProfilePage() {
  return (
    <main className=" min-h-[min(calc(100dvh-90px),40rem)] ">
      <Container className=" py-10 ">Profile Page</Container>
    </main>
  );
}
