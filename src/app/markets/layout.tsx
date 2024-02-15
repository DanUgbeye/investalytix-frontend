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
        <>
          <div className="relative mb-4 h-[170px] w-full lg:mb-12">
            <Image
              src={"/images/ad1.png"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          {children}
        </>
      </Container>
    </main>
  );
}
