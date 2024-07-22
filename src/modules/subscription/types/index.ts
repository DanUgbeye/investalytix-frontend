export const SUBSCRIPTION_PLAN_NAMES = {
  FREE: "free",
  PREMIUM: "premium",
} as const;

export type SubscriptionPlanName =
  (typeof SUBSCRIPTION_PLAN_NAMES)[keyof typeof SUBSCRIPTION_PLAN_NAMES];

export const SUBSCRIPTION_FREQUENCY = {
  MONTHLY: "monthly",
  ANNUALLY: "annually",
} as const;

export type SubscriptionFrequency =
  (typeof SUBSCRIPTION_FREQUENCY)[keyof typeof SUBSCRIPTION_FREQUENCY];

export type ServerSubscriptionData = {
  _id: string;
  status: string;
  userId: string;
  price: string;
};

export type SubscriptionData = {
  id: string;
  status: string;
  userId: string;
  price: string;
};

export type ServerTransactionData = {
  _id: string;
  userId: string;
  paymentReference: string;
  price: number;
  type: string;
  status: string;
};

export type TransactionData = {
  id: string;
  userId: string;
  paymentReference: string;
  price: number;
  type: string;
  status: string;
};
