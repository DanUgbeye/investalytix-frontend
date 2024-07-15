export const PROFILE_TABS = {
  PERSONAL_INFO: { label: "Personal Info", path: "personal-info" },
  SUBCRIPTIONS: {
    label: "Subscriptions and Billing",
    path: "subscription-and-billing",
  },
  WATCHLIST: { label: "Watchlist", path: "watchlist" },
  PRIVACY: { label: "Privacy & Security", path: "privacy-and-security" },
} as const;

export type ProfilePageTabItem =
  (typeof PROFILE_TABS)[keyof typeof PROFILE_TABS];
export type ProfilePageTab = ProfilePageTabItem["path"];
