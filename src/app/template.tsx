import NavBar from "@/components/ui/NavBar";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />

      {children}

      <p className="mt-6 bg-black py-5 text-center font-bold text-white">
        Trusted by more than 89,300 successful value investors
      </p>
    </>
  );
}
