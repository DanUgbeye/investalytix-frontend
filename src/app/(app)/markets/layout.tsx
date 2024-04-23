import { Container } from "@/components/container";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container>
        <>{children}</>
      </Container>
    </main>
  );
}
