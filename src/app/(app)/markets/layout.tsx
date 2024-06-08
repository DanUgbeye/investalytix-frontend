'use client'
import { Container } from "@/components/container";
import Image from "next/image";
import { FiArrowUp } from "react-icons/fi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container className=" relative py-10">
        <>
          {children}

          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="sticky bottom-20 left-full z-10 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-primary-base/20 backdrop-blur-sm"
          >
            <FiArrowUp className="size-6 text-primary-base" />
            {/* scroll */}
          </button>
        </>
      </Container>
    </main>
  );
}
