"use client";

import React, { useEffect, useState } from "react";
import { Input, InputProps } from "./ui/input";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  classNames?: { showButton?: string };
  showPassword?: boolean;
  onShowPasswordClick?: (state: boolean) => void;
}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(
  (
    { className, classNames, showPassword, onShowPasswordClick, ...props },
    ref
  ) => {
    const [showPwd, setShowPwd] = useState(showPassword);

    function handleShowPassword() {
      if (onShowPasswordClick) onShowPasswordClick(showPassword || false);
      else setShowPwd(!showPwd);
    }

    useEffect(() => {
      setShowPwd(showPassword);
    }, [showPassword]);

    return (
      <div className=" relative h-fit ">
        <Input
          type={showPwd ? "text" : "password"}
          className={cn(" mt-3 flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-main-gray-700 dark:bg-white dark:ring-offset-white dark:placeholder:text-gray-500 dark:focus-visible:ring-gray-950 pr-8 ", className)}
          ref={ref}
          {...props}
        />

        <Button
          type="button"
          variant={"ghost"}
          className={cn(
            " absolute right-1 top-[50%] aspect-square h-fit max-h-8 translate-y-[-50%] px-2 py-0 ",
            classNames?.showButton
          )}
          onClick={(e) => handleShowPassword()}
        >
          {showPwd ? (
            <Eye strokeWidth={1.5} className="h-5 w-5" />
          ) : (
            <EyeOff strokeWidth={1.5} className="h-5 w-5" />
          )}
        </Button>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";
