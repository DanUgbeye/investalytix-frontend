import Image from "next/image";

export default function Blog() {
  return (
    <div className="text-sm">
      <div className="relative h-72 w-full">
        <Image src="/images/metal1.jpg" fill className="object-cover" alt="" />
      </div>
      <p className="mt-6 font-bold uppercase">METALS</p>
      <p className="mt-2 text-2xl font-bold">
        Gold prices pare gains after U.S. inflation data
      </p>
      <p className="text-main-blue-base dark:text-main-blue-light mt-6">
        Reuters
      </p>
      <div className="mt-1 flex items-center gap-2">
        <p className="">11 Jan 2022</p>
        <span className="block h-1 w-1 rounded-full bg-black"></span>
        <p className="">11 Jan 2022</p>
      </div>
    </div>
  );
}
