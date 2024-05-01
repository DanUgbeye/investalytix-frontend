import NavBar from "@/components/ui/NavBar";

export default function AppTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />

      {children}

      <p className="sticky bottom-0 z-50 bg-black py-5 text-center font-bold text-white dark:border-t dark:border-t-white/10">
        Trusted by more than 89,300 successful value investors
      </p>
    </>
  );
}
