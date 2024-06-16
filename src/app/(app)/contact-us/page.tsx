import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="mx-auto grid min-h-screen grid-cols-[1fr,1fr]">
      <div className="px-14 py-24 max-w-[600px] ml-auto">
        <h1 className="text-8xl font-bold">Connect with <span className="text-primary-base dark:text-primary-light">us</span></h1>
        <p className="text-2xl mt-7">We're always here to help and answer any questions you might have. Please fill out the form below, and we'll get back to you as soon as possible.</p>
      </div>
      <div className="bg-[url('/images/contact-us.jpg')] bg-cover bg-left bg-no-repeat"></div>
    </main>
  );
}
