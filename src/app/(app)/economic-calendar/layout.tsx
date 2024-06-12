import { Container } from "@/components/container";
import Image from "next/image";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="pt-24">
        <h1 className="white-text mb-7 pb-5 text-center text-6xl font-extrabold capitalize">
          Economic calendar
        </h1>
      </div>

      {children}
    </Container>
  );
}
