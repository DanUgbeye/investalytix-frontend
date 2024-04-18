import { Container } from "@/components/container";
import Image from "next/image";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="relative mb-4 h-[170px] w-full lg:mb-12">
        <Image src={"/images/ad1.png"} alt="" fill className="object-cover" />
      </div>
      <div className="">
        <p className="white-text mb-2 text-center text-xl font-extrabold uppercase">
          MARKETS
        </p>
        <h1 className="white-text mb-7 border-b-[6px] border-primary-base pb-2 text-center text-3xl font-extrabold">
          CALENDAR
        </h1>
      </div>

      {children}
    </Container>
  );
}
