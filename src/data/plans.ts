import {
  SUBSCRIPTION_PLAN_NAMES,
  SubscriptionPlanName,
} from "@/modules/subscription/types";

export const plans: PricingPlan[] = [
  {
    popular: false,
    planName: SUBSCRIPTION_PLAN_NAMES.FREE,
    name: "Free Plan",
    desc: "Free Forever, No Credit Card Required",
    monthly: 0,
    yearly: 0,
    features: [
      "Limited Access to Comprehensive Stock Dashboard",
      "Advanced Charting",
      "5 Years Financial Data",
      "Limited Access to Equity Research",
      "Market and Companies News",
    ],
  },
  {
    popular: true,
    planName: SUBSCRIPTION_PLAN_NAMES.PREMIUM,
    name: "Premium plan",
    desc: "Billed Per Month or Annually",
    monthly: 59.95,
    yearly: Number((59.95 * 12).toPrecision(3)),
    features: [
      "All Free Features, Plus:",
      "Full Access to Comprehensive Stock Dashboard",
      "30 Years Financial Data",
      "Data Export to Excel + Sheets + PDF + CSV",
      "Economics Calendar",
      "Full Access to All Equity Research",
      "Unlimited Email Alerts",
      "Stock Picks (Coming Soon)",
      "Real-Time Stock Valuation (Coming Soon)",
      "Stock Screener (Coming Soon)",
      "Options (Coming Soon)",
      "Academy (Coming Soon)",
    ],
  },
];

export type PricingPlan = {
  popular: boolean;
  planName: SubscriptionPlanName;
  name: string;
  desc: string;
  monthly: number;
  yearly: number;
  features: string[];
};
