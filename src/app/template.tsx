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

      <p className=" bg-black py-5 text-center font-bold text-white dark:border-t dark:border-t-white/10">
        Trusted by more than 89,300 successful value investors
      </p>
    </>
  );
}
