import { Container } from "@/components/container";
import Link from "next/link";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container className="pt-12 lg:pt-24">{children}</Container>;
}
