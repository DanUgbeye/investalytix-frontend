export const BOND_COUNTRY = {
  US: "US",
  UK: "UK",
  ITALY: "ITALY",
  FRANCE: "FRANCE",
  JAPAN: "JAPAN",
  AUSTRALIA: "AUSTRALIA",
  CANADA: "CANADA",
  BRAZIL: "BRAZIL",
} as const;

export type BondCountry = (typeof BOND_COUNTRY)[keyof typeof BOND_COUNTRY];
