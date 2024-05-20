"use client";

import useAuthStore from "@/modules/auth/store";

export default function Watchlist() {
  const { auth } = useAuthStore();

  // url={`${process.env.NEXT_PUBLIC_API_BASE_URL}/watchlists`}

  if (!auth?.token) return null;
  
  return (
    <div className="">
      <div>
        <header className="relative mb-4">
          <p className="white-text text-2xl font-bold capitalize text-[#2A3037]">
            watchlist
          </p>

          <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] from-50% to-[#545454] to-50% dark:to-white/30"></div>
        </header>
        <div className="flex flex-col gap-6"></div>
      </div>
    </div>
  );
}
