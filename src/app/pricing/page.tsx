"use client";
import { Container } from "@/components/container";
import { Disclosure } from "@headlessui/react";
import { FiCheck, FiChevronDown, FiStar } from "react-icons/fi";

const plans = [
  {
    name: "Basic plan",
    desc: "Lorem ipsum dolor sit amet",
    monthly: 19,
    yearly: 199,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
  {
    name: "Business plan",
    desc: "Lorem ipsum dolor sit amet",
    monthly: 29,
    yearly: 299,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
  {
    name: "Basic plan",
    desc: "Lorem ipsum dolor sit amet",
    monthly: 49,
    yearly: 499,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
];

const testimonials = [
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "John Doe",
    position: "CEO",
    company: "Uber",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "John Doe",
    position: "CEO",
    company: "Uber",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "John Doe",
    position: "CEO",
    company: "Uber",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "John Doe",
    position: "CEO",
    company: "Uber",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "John Doe",
    position: "CEO",
    company: "Uber",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "John Doe",
    position: "CEO",
    company: "Uber",
  },
];

const faqs = [
  {
    label: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    label: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    label: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    label: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    label: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

export default function PricingPage() {
  return (
    <Container>
      <main>
        {/* plans */}
        <section className="py-10 md:py-12 lg:py-16">
          <h1 className="text-center font-bold">Pricing plans</h1>
          <p className="mt-4 text-center text-3xl font-bold md:text-4xl lg:text-6xl">
            Introduce Pricing Plans
          </p>
          <p className="mt-6 text-center font-medium lg:text-lg">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>

          <div className="mt-10 md:mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Plan key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        {/* testimony */}
        <section className="py-10 md:py-12 lg:py-16">
          <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            Customer testimonials
          </h1>
          <p className="mt-6 text-center md:text-lg">
            100,000+ happy customers
          </p>

          <div className="mt-10 lg:mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimony, index) => (
              <Testimonial key={index} testimony={testimony} />
            ))}
          </div>
        </section>

        {/* faq and support */}
        <section className="py-10 md:py-12 lg:py-16">
          <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl ">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center md:text-lg">
            Frequently asked questions ordered by popularity. Remember that if
            the visitor has not committed to the call to action, they may still
            have questions (doubts) that can be answered.
          </p>

          {/* faq */}
          <div className="mx-auto mt-10 mb-20 lg:my-20 grid max-w-xl gap-y-1">
            {faqs.map((faq, index) => (
              <FAQ key={index} faq={faq} />
            ))}
          </div>

          {/* support */}
          <div className="">
            <h3 className="text-center text-3xl font-bold">
              Still have questions?
            </h3>
            <p className="mt-4 text-center text-lg">
              Support details to capture customers that might be on the fence.
            </p>
            <button className="mx-auto mt-6 block w-fit border border-black px-6 py-3">
              Contact us
            </button>
          </div>
        </section>
      </main>
    </Container>
  );
}

function Testimonial({
  testimony,
}: {
  testimony: (typeof testimonials)[number];
}) {
  return (
    <div className="testimony border border-black p-8">
      <div className="flex items-center">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      <p className="my-8">{testimony.testimony}</p>

      <div className="flex items-center gap-4">
        <div className="h-14 w-14 flex-shrink-0 rounded-full bg-gray-100"></div>
        <div className="">
          <p className="font-semibold">{testimony.name}</p>
          <p className="">
            {testimony.position} {testimony.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function Plan({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <div className="rounded-t-2xl border border-black p-8">
      <p className="text-xl font-bold">{plan.name}</p>
      <p className="mb-8 mt-1">{plan.desc}</p>

      <hr className="border-black" />

      <p className="mt-8 text-6xl font-bold">
        ${plan.monthly}
        <span className="text-3xl">/mo</span>
      </p>
      <p className="mt-2">or ${plan.yearly} yearly</p>

      <button className="my-8 w-full bg-[#125BD4] px-6 py-3 text-white">
        Get started
      </button>

      <hr className="border-black" />

      <div className="mt-8 flex flex-col gap-4">
        {plan.features.map((feature, index) => (
          <div
            className="flex items-center gap-4"
            key={feature.replaceAll(" ", "-") + index}
          >
            <FiCheck />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ({ faq }: { faq: (typeof faqs)[number] }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-b-black">
          <Disclosure.Button
            className={`flex w-full items-center justify-between gap-5 py-4 text-lg font-bold ${open ? "" : ""}`}
          >
            {faq.label}
            <FiChevronDown className={`${open ? "" : ""}`} />
          </Disclosure.Button>

          <Disclosure.Panel className={"pb-4 text-[#000000]"}>
            {faq.content}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
