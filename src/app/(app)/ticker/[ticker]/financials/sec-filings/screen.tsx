"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SECFilingPageData } from "./page";

export const SEC_FILING_TYPES = [
  {
    label: "All",
    value: [],
  },
  {
    label: "Annual Report to Shareholders",
    value: ["ARS"],
  },
  {
    label: "Periodic Financial Report",
    value: ["10-K", "10-Q"],
  },
  {
    label: "Corporate Changes & Voting Matters",
    value: ["8-K"],
  },
  {
    label: "Proxy Statements",
    value: ["DEFA14A", "DEF 14A"],
  },
  {
    label: "Offering Registration",
    value: ["S-1", "S-8", "S-8 POS"],
  },
  {
    label: "Tender Offer/Acquisition Reports",
    value: ["SC 13G/A"],
  },
];

function getSecFilingNameFromType(type: string) {
  return (
    SEC_FILING_TYPES.find((sec) => sec.value.includes(type))?.label || type
  );
}

interface SECFilingScreenProps extends SECFilingPageData {
  ticker: string;
}

export default function SECFilingScreen(props: SECFilingScreenProps) {
  const { ticker, SECFilings } = props;

  const [currentFormType, setCurrentFormType] = useState<string>("All");

  const SECFilingsToDisplay = useMemo(() => {
    const currentFormValues = SEC_FILING_TYPES.find(
      (formType) => formType.label == currentFormType
    );
    if (!currentFormValues || currentFormType === "All") {
      let allTypes = getAvailableTypes();
      return SECFilings.filter((filing) => allTypes.includes(filing.type));
    }

    return SECFilings.filter((filing) =>
      currentFormValues.value.includes(filing.type)
    );
  }, [SECFilings, currentFormType]);

  function getAvailableTypes() {
    let formTypes: string[] = [];

    for (const formTypeEntry of SEC_FILING_TYPES) {
      formTypes.push(...formTypeEntry.value);
    }

    return formTypes;
  }

  function handleFormSort(type: string) {
    setCurrentFormType(type);
  }

  return (
    <section className="space-y-12 pb-12">
      <div className="flex gap-2 overflow-x-auto md:flex-wrap">
        {SEC_FILING_TYPES.map((formType, index) => {
          const isActive = currentFormType === formType.label;

          return (
            <Button
              key={`formType.label-${index}`}
              variant={"link"}
              className={cn(
                "h-fit min-w-fit rounded-lg border px-4 py-2 text-xs duration-300 hover:border-primary-base hover:text-primary-base hover:no-underline dark:border-main-gray-700",
                isActive &&
                  "border-primary-base text-primary-base dark:border-primary-base dark:text-primary-base"
              )}
              onClick={() => handleFormSort(formType.label)}
            >
              {formType.label}
            </Button>
          );
        })}
      </div>

      <div className="grid place-items-center gap-8 sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
        {SECFilingsToDisplay.map((filing, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-xs rounded-lg border text-sm sm:max-w-sm dark:border-main-gray-700"
            >
              <div className="space-y-10 p-3 text-center">
                <div className="space-y-1 pt-4">
                  <h5 className="font-bold">
                    {getSecFilingNameFromType(filing.type)}
                  </h5>
                  <p className="font-light italic">Form {filing.type}</p>
                </div>

                <div className="font-light italic">
                  {format(filing.fillingDate, "MMMM dd, yyyy")}
                </div>
              </div>

              <div className="border-t p-3 text-center dark:border-main-gray-700">
                <Link
                  href={filing.finalLink}
                  target={"_blank"}
                  className="text-primary-base underline decoration-transparent underline-offset-4 duration-300 hover:decoration-primary-base"
                >
                  View Filing
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
