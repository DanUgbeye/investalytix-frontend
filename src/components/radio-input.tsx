import { cn } from "@/lib/utils";
import { Switch } from "@headlessui/react";
import { Fragment, useState } from "react";

interface Props {
  checked?: boolean;
  onCheckedChange?: (state: boolean) => void;
  className?: string;
}

export default function RadioInput(props: Props) {
  const { checked, onCheckedChange, className } = props;

  return (
    <Switch checked={checked} onChange={onCheckedChange} as={Fragment}>
      {/* @ts-ignore */}
      {({ checked, disabled }) => (
        <button
          className={cn(
            "group inline-flex h-6 w-11 shrink-0 items-center rounded-full",
            checked
              ? "bg-primary-base dark:bg-primary-light"
              : "bg-gray-200 dark:bg-main-gray-700",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
        >
          <span
            className={cn(
              "size-4 rounded-full bg-white transition",
              checked ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
      )}
    </Switch>
  );
}
