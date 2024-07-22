import {
  SUBSCRIPTION_PLAN_NAMES,
  SubscriptionPlanName,
} from "@/modules/subscription/types";

export const plans: SubscriptionPlan[] = [
  {
    popular: false,
    name: SUBSCRIPTION_PLAN_NAMES.FREE,
    desc: "Free Forever, No Credit Card Required",
    monthly: 0,
    yearly: 0,
    discount: 0,
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
    name: SUBSCRIPTION_PLAN_NAMES.PREMIUM,
    desc: "Billed Per Month or Annually",
    monthly: 59.95,
    yearly: Number((59.95 * 12).toPrecision(3)),
    discount: 16,
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

export type SubscriptionPlan = {
  popular: boolean;
  name: SubscriptionPlanName;
  desc: string;
  monthly: number;
  yearly: number;
  discount: number;
  features: string[];
};
