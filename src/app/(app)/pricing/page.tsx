"use client";
import { Container } from "@/components/container";
import PAGES from "@/data/page-map";
import { plans } from "@/data/plans";
import { Disclosure } from "@headlessui/react";
import Link, { LinkProps } from "next/link";
import { FiCheck, FiChevronDown, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

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

const MotionLink = forwardRef(
  (
    { children, ...props }: LinkProps & Record<string, any>,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link ref={ref} {...props}>
      {children}
    </Link>
  )
);

export default function PricingPage() {
  return (
    <Container>
      <main>
        {/* plans */}
        <section className="py-10 md:py-12 lg:py-16">
          <motion.h1
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                },
              },
            }}
            viewport={{ once: true }}
            className="text-center font-bold"
          >
            Pricing plans
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                },
              },
            }}
            viewport={{ once: true }}
            className="mt-4 text-center text-3xl font-bold md:text-4xl lg:text-6xl"
          >
            Introduce Pricing Plans
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.9,
                },
              },
            }}
            viewport={{ once: true }}
            className="mt-6 text-center font-medium lg:text-lg"
          >
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.5,
                },
              },
            }}
            viewport={{ once: true }}
            className="mx-auto mt-10 grid max-w-6xl gap-8 md:mt-20 md:grid-cols-2"
          >
            {plans.map((plan) => (
              <Plan key={plan.name} plan={plan} />
            ))}
          </motion.div>
        </section>

        {/* testimony */}
        <section className="py-10 md:py-12 lg:py-16">
          <motion.h1
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                },
              },
            }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Customer testimonials
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                },
              },
            }}
            viewport={{ once: true }}
            className="mt-6 text-center md:text-lg"
          >
            100,000+ happy customers
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.9,
                },
              },
            }}
            viewport={{ once: true }}
            className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          >
            {testimonials.map((testimony, index) => (
              <Testimonial key={index} testimony={testimony} />
            ))}
          </motion.div>
        </section>

        {/* faq and support */}
        <section className="py-10 md:py-12 lg:py-16">
          <motion.h1
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                },
              },
            }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                },
              },
            }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-center md:text-lg"
          >
            Frequently asked questions ordered by popularity. Remember that if
            the visitor has not committed to the call to action, they may still
            have questions (doubts) that can be answered.
          </motion.p>

          {/* faq */}
          <motion.div
            initial="hidden"
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, y: 50 },
              onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.9,
                },
              },
            }}
            viewport={{ once: true }}
            className="mx-auto mb-20 mt-10 grid max-w-xl gap-y-1 lg:my-20"
          >
            {faqs.map((faq, index) => (
              <FAQ key={index} faq={faq} />
            ))}
          </motion.div>

          {/* support */}
          <div className="">
            <motion.h3
              initial="hidden"
              whileInView="onscreen"
              variants={{
                hidden: { opacity: 0, y: 50 },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3,
                  },
                },
              }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold"
            >
              Still have questions?
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="onscreen"
              variants={{
                hidden: { opacity: 0, y: 50 },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.6,
                  },
                },
              }}
              viewport={{ once: true }}
              className="mt-4 text-center text-lg"
            >
              Support details to capture customers that might be on the fence.
            </motion.p>
            <MotionLink
              initial="hidden"
              whileInView="onscreen"
              variants={{
                hidden: { opacity: 0, y: 50 },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.9,
                  },
                },
              }}
              viewport={{ once: true }}
              href={PAGES["CONTACT"]}
              className="mx-auto mt-6 block w-fit border border-black px-6 py-3 dark:border-white"
            >
              Contact us
            </MotionLink>
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
    <div className="testimony border border-black p-8 dark:border-white/10">
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
    <div className="rounded-t-2xl border border-black p-8 dark:border-white/10">
      <p className="text-xl font-bold">{plan.name}</p>
      <p className="mb-8 mt-1">{plan.desc}</p>

      <hr className="border-black dark:border-white/10" />

      <p className="mt-8 text-6xl font-bold">
        ${plan.monthly}
        <span className="text-3xl">/mo</span>
      </p>
      <p className="mt-2">or ${plan.yearly} yearly</p>

      <button className="my-8 w-full bg-[#125BD4] px-6 py-3 text-white">
        Get started
      </button>

      <hr className="border-black dark:border-white/10" />

      <div className="mt-8 flex flex-col gap-4">
        {plan.features.map((feature, index) => (
          <div
            className="flex items-center gap-4"
            key={feature.replaceAll(" ", "-") + index}
          >
            <div className="shrink-0">
              <FiCheck />
            </div>
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
        <div className="border-b border-b-black dark:border-b-white/10">
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
