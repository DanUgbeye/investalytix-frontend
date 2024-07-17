"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/form";
import { PasswordInput } from "@/components/password-input";
import RadioInput from "@/components/radio-input";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { clientAPI } from "@/config/client/api";
import { cn } from "@/lib/utils";
import useLogout from "@/modules/auth/hooks/use-logout";
import { AuthRepository } from "@/modules/auth/repository";
import { UserRepository } from "@/modules/user/repository";
import { useAppStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function PrivacyTab() {
  const user = useAppStore(({ user }) => user);
  const { setAuth } = useAppStore();
  const authRepo = useMemo(() => new AuthRepository(clientAPI), []);
  const userRepo = useMemo(() => new UserRepository(clientAPI), []);
  const [loading, setLoading] = useState({ delete: false, "2fa": false });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const logout = useLogout();

  const [enabled2FA, setEnabled2FA] = useState(
    user?.enabled2FA ? user.enabled2FA : false
  );

  function toggleLoading(select: keyof typeof loading, state: boolean) {
    setLoading((prev) => ({ ...prev, [select]: state }));
  }

  async function handleDeleteAccount(data: { password?: string }) {
    if (!user) return;

    try {
      await userRepo.deleteAccount(data);
      logout();
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const {
    control,
    handleSubmit,
    formState: { isDirty, isSubmitting },
    reset,
  } = useForm<{ password?: string }>({
    defaultValues: {
      password: undefined,
    },
    resolver: zodResolver(
      z.object({
        password: z
          .string()
          .min(8, "Password must be at least 8 characters")
          .max(64, "Password must be at most 64 characters")
          .optional(),
      })
    ),
  });

  async function handle2FASelect(state: boolean) {
    if (!user) return;
    let previousState = user.enabled2FA;

    try {
      toggleLoading("2fa", true);
      setEnabled2FA(state);
      let user = await authRepo.toggle2FA(state);
      setAuth({ user });
    } catch (error: any) {
      setEnabled2FA(previousState);
      toast.error(error.message);
    } finally {
      toggleLoading("2fa", false);
    }
  }

  return (
    <>
      <Dialog
        open={showDeleteModal}
        onOpenChange={(state) => {
          setShowDeleteModal(state);
          reset();
        }}
      >
        {user !== undefined && (
          <>
            <DialogTrigger></DialogTrigger>
            <DialogContent className="space-y-5 py-10 max-sm:w-[95%]">
              <DialogHeader>
                <DialogTitle className="text-left text-2xl font-bold text-red-500">
                  Are you absolutely sure?
                </DialogTitle>

                <DialogDescription className="text-left">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(handleDeleteAccount)}
                className="space-y-5"
              >
                {user.googleId === undefined && (
                  <>
                    {/* currentPassword */}
                    <Controller
                      control={control}
                      name="password"
                      defaultValue={""}
                      render={({ field, fieldState }) => {
                        return (
                          <FormItem className="space-y-3">
                            <FormLabel htmlFor="password">
                              Type in your password to confirm
                            </FormLabel>

                            <PasswordInput
                              {...field}
                              id="password"
                              placeholder="********"
                              className="h-12 outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                            />
                            <FormMessage message={fieldState.error?.message} />
                          </FormItem>
                        );
                      }}
                    />
                  </>
                )}

                <div className="flex justify-end gap-2">
                  <Button
                    disabled={
                      (!isDirty && user.googleId === undefined) || isSubmitting
                    }
                    variant={"destructive"}
                    className="w-full max-w-28"
                  >
                    {isSubmitting ? (
                      <Spinner className="size-4 text-white" />
                    ) : (
                      "Delete"
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </>
        )}
      </Dialog>

      <section className="space-y-10">
        <div className="flex w-full max-w-3xl flex-col gap-2">
          <h3 className="mb-3 text-xl font-semibold capitalize sm:text-2xl">
            2-factor authentication
          </h3>

          <div className="w-full rounded-lg border dark:border-main-gray-700">
            <div
              className={cn(
                "flex items-center justify-between gap-5 px-4 py-8 duration-300 sm:px-10 md:py-10",
                {
                  "pointer-events-none opacity-40": loading["2fa"],
                }
              )}
            >
              <div className="flex w-full max-w-lg items-center gap-5">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  className="shrink-0 max-sm:hidden"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_678_316)">
                    <path
                      d="M5.78189 9.47136C5.1416 6.2124 6.0974 3.54604 8.98801 1.73039C11.5716 0.107581 14.3377 0.0868139 16.9391 1.68737C19.88 3.49634 20.8574 6.1805 20.2171 9.47136C20.8868 9.47136 21.5697 9.47136 22.2525 9.47136C22.9863 9.47062 23.6692 9.64788 24.2801 10.0388C25.3689 10.7352 25.9752 11.7157 25.9844 12.9729C26.0061 15.9774 26.0022 18.982 25.9875 21.9858C25.9783 23.9112 24.3303 25.4903 22.3198 25.4933C16.1039 25.5022 9.88891 25.5022 3.6731 25.4933C1.6656 25.4903 0.0153719 23.9046 0.00841217 21.9821C-0.00318738 18.9872 -0.00241407 15.9915 0.00841217 12.9966C0.0153719 11.0593 1.66637 9.4899 3.69088 9.4721C4.38608 9.46617 5.08128 9.47136 5.78189 9.47136ZM24.1362 13.2362C23.9947 13.3281 23.9066 13.3838 23.82 13.4416C21.5325 14.9776 19.2466 16.5174 16.9561 18.049C14.5094 19.6859 11.4479 19.671 9.00657 18.0267C6.72146 16.4877 4.43248 14.9532 2.14505 13.4179C2.06308 13.363 1.97956 13.3118 1.86125 13.2362V13.5662C1.86125 16.2926 1.86125 19.0191 1.86125 21.7463C1.86125 22.993 2.61367 23.7169 3.9105 23.7169C9.97242 23.7169 16.0336 23.7169 22.0955 23.7169C23.3738 23.7169 24.1362 22.9886 24.137 21.7663C24.137 19.0302 24.137 16.2949 24.137 13.5588C24.137 13.469 24.137 13.3793 24.137 13.2362H24.1362ZM13.0076 13.0329C16.0746 13.0292 18.5716 10.6262 18.5669 7.68167C18.563 4.73867 16.0591 2.34525 12.9891 2.34896C9.92216 2.35266 7.42594 4.75424 7.4298 7.69947C7.4329 10.641 9.9384 13.0366 13.0076 13.0329ZM23.3413 11.5904C22.9948 11.3463 22.6414 11.2529 22.2571 11.2529C21.4359 11.2529 20.6138 11.2648 19.7926 11.2455C19.5181 11.2388 19.3673 11.3189 19.2188 11.5444C17.465 14.2144 13.9681 15.4397 10.8416 14.4985C9.07384 13.966 7.70355 12.9425 6.70135 11.4517C6.64026 11.3612 6.50416 11.2618 6.40131 11.2603C5.4834 11.2462 4.56471 11.247 3.6468 11.2559C3.2965 11.2596 2.97171 11.3597 2.66625 11.5829C2.76369 11.6527 2.83793 11.709 2.91449 11.7609C5.28002 13.3504 7.64555 14.9413 10.0126 16.5292C11.8809 17.7827 14.0972 17.7871 15.9694 16.5404C16.9136 15.9114 17.8532 15.2758 18.7943 14.6431C20.2976 13.6337 21.8001 12.6243 23.3405 11.5896L23.3413 11.5904Z"
                      className="fill-black dark:fill-main-gray-300"
                    />
                    <path
                      d="M12.7408 8.86491C13.2435 7.90146 13.7276 6.97584 14.2101 6.04947C14.4475 5.59408 14.6803 5.1372 14.9208 4.68403C15.1883 4.18042 15.7196 3.995 16.2029 4.22938C16.6715 4.45707 16.8409 4.97551 16.5865 5.46651C15.6809 7.21466 14.7723 8.96133 13.8567 10.705C13.5257 11.3347 12.8189 11.4408 12.2977 10.9446C11.3992 10.0902 10.506 9.23056 9.6136 8.37021C9.19601 7.96821 9.179 7.42604 9.56256 7.06039C9.94535 6.69548 10.506 6.71625 10.9282 7.11824C11.5237 7.68637 12.1137 8.25895 12.7408 8.86417V8.86491Z"
                      className="fill-black dark:fill-main-gray-300"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_678_316">
                      <rect
                        width={26}
                        height={25}
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold sm:text-xl">
                    Email Verification
                  </p>
                  <p className="text-sm">
                    Receive login codes via email before accessing your account.
                  </p>
                </div>
              </div>

              <RadioInput
                checked={enabled2FA}
                onCheckedChange={handle2FASelect}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-3xl flex-col gap-2">
          <h3 className="mb-3 text-xl font-semibold capitalize text-red-600 sm:text-2xl">
            Delete account
          </h3>

          <div className="w-full rounded-lg border dark:border-main-gray-700">
            <div
              className={cn(
                "flex items-center justify-between gap-5 px-4 py-8 duration-300 sm:px-10 md:py-10"
              )}
            >
              <div className="flex w-full max-w-lg items-center gap-5">
                <div className="flex flex-col gap-1">
                  <p className="">Deleting your account is not reversible</p>
                </div>
              </div>

              <Button
                variant={"destructive"}
                className="w-full max-w-24"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
