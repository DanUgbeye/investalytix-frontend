"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { HTMLAttributes, useState } from "react";
import { FiCheck, FiInfo } from "react-icons/fi";
import RadioInput from "@/components/radio-input";
import { plans } from "@/data/plans";
import {
  SUBSCRIPTION_PLAN_NAMES,
  SubscriptionPlanName,
} from "@/modules/subscription/types";

export default function Pricing(props: HTMLAttributes<HTMLDivElement>) {
  const [anually, setAnually] = useState(false);

  const updateAnually = (s: boolean) => setAnually(s);

  const activePlan = SUBSCRIPTION_PLAN_NAMES.FREE;

  return (
    <section {...props}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="">Monthly</span>
        <RadioInput
          checked={anually}
          onCheckedChange={updateAnually}
          visualMode={false}
        />
        <span className="">Anually</span>
        <span className="inline-block rounded-md bg-primary-base/20 px-2 py-1">
          16% off. It's like 60 days free 😍
        </span>
      </div>

      <div className="overflow-auto hide-scrollbar max-md:px-6 max-md:pb-1">
        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-[repeat(2,340px)] md:mt-10 md:grid-cols-2">
          {plans.map((plan) => (
            <Plan
              key={plan.name}
              plan={plan}
              anually={anually}
              active={activePlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Plan({
  plan,
  anually,
  active,
}: {
  plan: (typeof plans)[number];
  anually: boolean;
  active: SubscriptionPlanName;
}) {
  const monthlyDiscount = (plan.discount * plan.monthly) / 100;
  const yearlyDiscount = monthlyDiscount * 12;
  const isActive = plan.name === active;
  return (
    <div
      className={`border border-black p-8 dark:border-white/30 [&:nth-child(1)]:rounded-l-3xl [&:nth-child(2)]:rounded-r-3xl ${isActive ? "ring-[2px] ring-black ring-offset-0 dark:ring-[1px] dark:ring-white/60" : "[&:nth-child(1)]:border-r-0"}`}
    >
      <p className="text-center text-xl font-extrabold capitalize md:text-3xl">
        {plan.name}
      </p>

      <p className="mt-8 text-center text-3xl font-bold">
        ${plan.monthly}
        <span className="text-xl font-normal text-gray-400"> / month</span>
      </p>

      {anually && (
        <p className="mt-2 text-center text-gray-400">${plan.yearly} / year</p>
      )}

      {anually && (
        <>
          {plan.monthly > 0 ? (
            <div className="mx-auto mt-2 flex w-fit items-center gap-2 rounded-md bg-primary-base/20 px-2 py-1 text-sm">
              you save ${yearlyDiscount.toPrecision(3)} a year
              <Popover>
                <PopoverTrigger>
                  <FiInfo />
                </PopoverTrigger>

                <PopoverContent align="center" className="">
                  <p className="text-xs">
                    Compared to paying monthly. the monthly price is $
                    {plan.monthly}. The monthly plan within the yearly
                    subscription is $
                    {(plan.monthly - monthlyDiscount).toPrecision(2)}
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div className="mt-2 h-7"></div>
          )}
        </>
      )}

      <Button className="mt-8 w-full rounded-lg" disabled={isActive}>
        {isActive ? "Current plan" : "Get started"}
      </Button>

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
