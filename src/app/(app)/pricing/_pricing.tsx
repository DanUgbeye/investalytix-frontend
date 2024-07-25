"use client";
import RadioInput from "@/components/radio-input";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { clientAPI } from "@/config/client/api";
import PAGES from "@/data/page-map";
import { plans, SubscriptionPlan } from "@/data/plans";
import { SubscriptionRepository } from "@/modules/subscription/repository";
import {
  SUBSCRIPTION_FREQUENCY,
  SUBSCRIPTION_PLAN_NAMES,
  SubscriptionFrequency,
  SubscriptionPlanName,
} from "@/modules/subscription/types";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";
import { HTMLAttributes, useMemo, useState } from "react";
import { FiCheck, FiInfo } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Pricing(props: HTMLAttributes<HTMLDivElement>) {
  const subscriptionRepo = useMemo(
    () => new SubscriptionRepository(clientAPI),
    []
  );
  const router = useRouter();
  const user = useAppStore(({ user }) => user);
  const [isLoading, setIsLoading] = useState(false);

  const [activePlan, setActivePlan] = useState<
    SubscriptionPlanName | undefined
  >(user?.plan);
  const [pricingFrequency, setPricingFrequency] =
    useState<SubscriptionFrequency>(SUBSCRIPTION_FREQUENCY.MONTHLY);

  const toggleFrequency = () =>
    setPricingFrequency((prev) => {
      if (prev === SUBSCRIPTION_FREQUENCY.MONTHLY) {
        return SUBSCRIPTION_FREQUENCY.ANNUALLY;
      }
      return SUBSCRIPTION_FREQUENCY.MONTHLY;
    });

  async function handlePricingClick(plan: SubscriptionPlan) {
    let redirectLink: string | undefined = undefined;

    try {
      setIsLoading(true);
      if (
        user !== undefined &&
        user.plan !== SUBSCRIPTION_PLAN_NAMES.PREMIUM &&
        plan.name === SUBSCRIPTION_PLAN_NAMES.PREMIUM
      ) {
        const { link } = await subscriptionRepo.getSubscriptionLink({
          plan: SUBSCRIPTION_PLAN_NAMES.PREMIUM,
          frequency: pricingFrequency,
        });

        redirectLink = link;
      }

      if (!user) {
        redirectLink = PAGES.SIGNUP;
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error);
    } finally {
      setIsLoading(false);
    }

    if (redirectLink) {
      return router.push(redirectLink);
    }
  }

  const isAnnually = useMemo(() => {
    return pricingFrequency === SUBSCRIPTION_FREQUENCY.ANNUALLY;
  }, [pricingFrequency]);

  return (
    <section {...props}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="">Monthly</span>
        <RadioInput
          checked={isAnnually}
          onCheckedChange={toggleFrequency}
          visualMode={false}
        />
        <span className="">Anually</span>
        {isAnnually && (
          <span className="inline-block rounded-md bg-primary-base/20 px-2 py-1">
            16% off. It's like 60 days free 😍
          </span>
        )}
      </div>

      <div className="hide-scrollbar overflow-auto max-md:px-6 max-md:pb-1">
        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-[repeat(2,340px)] md:mt-10 md:grid-cols-2">
          {plans.map((plan) => (
            <Plan
              key={plan.name}
              plan={plan}
              anually={pricingFrequency === SUBSCRIPTION_FREQUENCY.ANNUALLY}
              isActive={activePlan === plan.name}
              isLoading={isLoading}
              onClick={() => handlePricingClick(plan)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Plan(props: {
  plan: SubscriptionPlan;
  anually: boolean;
  isActive: boolean;
  isLoading: boolean;
  onClick?(): void;
}) {
  const { plan, anually, isActive, isLoading, onClick } = props;

  const monthlyDiscount = (plan.discount * plan.monthly) / 100;
  const yearlyDiscount = monthlyDiscount * 12;
  const yearly = (plan.monthly * 12 - yearlyDiscount).toFixed(2);

  return (
    <div
      className={`border border-black p-8 dark:border-white/30 [&:nth-child(1)]:rounded-l-3xl [&:nth-child(2)]:rounded-r-3xl ${isActive ? "ring-[2px] ring-black ring-offset-0 dark:ring-[1px] dark:ring-white/60" : "[&:nth-child(1)]:border-r-0"}`}
    >
      <p className="text-center text-xl font-extrabold capitalize md:text-3xl">
        {plan.name}
      </p>

      <p className="mt-8 text-center text-3xl font-bold">
        ${anually ? (plan.monthly - monthlyDiscount).toFixed(2) : plan.monthly}
        <span className="text-xl font-normal text-gray-400"> / month</span>
      </p>

      {anually && (
        <p className="mt-2 text-center text-gray-400">${yearly} / year</p>
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

      <Button
        className="mt-8 w-full rounded-lg"
        onClick={onClick}
        disabled={isLoading || isActive}
      >
        {isActive ? (
          "Current plan"
        ) : isLoading ? (
          <Spinner className="text-white" />
        ) : (
          "Get started"
        )}
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
