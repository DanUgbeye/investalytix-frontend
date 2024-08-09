import { NewsSectionProps } from "@/app/(app)/news/_NewsSection";

const newsSections: NewsSectionProps[] = [
  {
    label: "General News",
    sections: [
      "News",
      "Top Stories",
      "Markets",
      "Market Summary",
      "Movers",
      "Macro Economic Events",
      "Economics",
    ],
  },
  {
    label: "Company News",
    sections: [
      "Earnings",
      "Earnings Beats",
      "Offerings",
      "Buybacks",
      "Management",
      "Legal",
    ],
  },
  {
    label: "Analyst Insights",
    sections: [
      "Analyst Color",
      "Analyst Ratings",
      "Price Target",
      "Reiteration",
    ],
  },
  {
    label: "Trading Ideas",
    sections: [
      "Trading Ideas",
      "Short Ideas",
      "Short Sellers",
      "Sector ETFs",
      "Options",
      "Technicals",
    ],
  },
  {
    label: "Investment Types",
    sections: ["ETFs", "Bonds", "Equities", "Cryptocurrency", "Gaming"],
  },
  {
    label: "Tech Focus",
    sections: ["Tech", "Previews"],
  },
];

export default newsSections;
