"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/form";
import { PasswordInput } from "@/components/password-input";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clientAPI } from "@/config/client/api";
import { UserRepository } from "@/modules/user/repository";
import { UserUpdate } from "@/modules/user/types";
import { useAppStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

type UpdatePassword = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function PersonalInfoTab() {
  const user = useAppStore(({ user }) => user);
  const { setAuth } = useAppStore();
  const userRepo = useMemo(() => new UserRepository(clientAPI), []);

  const {
    control: basicInfoControl,
    handleSubmit: basicInfoSubmit,
    formState: { isDirty: basicFormDirty, isSubmitting: basicFormSubmitting },
    reset,
  } = useForm<UserUpdate>({
    defaultValues: { ...user },
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
        firstname: z.string().min(1, "required"),
        lastname: z.string().min(1, "required"),
      })
    ),
  });

  async function onBasicInfoSubmit(data: UserUpdate) {
    if (!user) return;

    try {
      let res = await userRepo.updateUser(user.id, data);
      toast.success("updated");
      setAuth({ user: res });
      reset(res);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  const {
    control: updatePasswordControl,
    handleSubmit: updatePasswordSubmit,
    formState: {
      isDirty: updatePasswordDirty,
      isSubmitting: updatePasswordSubmitting,
    },
    reset: resetUpdatePasswordForm,
  } = useForm<UpdatePassword>({
    defaultValues: {
      confirmPassword: "",
      currentPassword: "",
      newPassword: "",
    },
    resolver: zodResolver(
      z
        .object({
          currentPassword: z
            .string()
            .min(8, "Current Password must be at least 8 characters")
            .max(64, "Current Password must be at most 64 characters"),
          newPassword: z
            .string()
            .min(8, "New Password must be at least 8 characters")
            .max(64, "New Password must be at most 64 characters"),
          confirmPassword: z
            .string()
            .min(8, "Confirm Password must be at least 8 characters")
            .max(64, "Confirm Password must be at most 64 characters"),
        })
        .refine((data) => data.newPassword !== data.currentPassword, {
          path: ["newPassword"],
          message: "Current password and New password cannot be equal",
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
          path: ["confirmPassword"],
          message: "New password and Confirm password do not match",
        })
    ),
  });

  async function onUpdatePasswordSubmit(data: UpdatePassword) {
    if (!user) return;

    try {
      let res = await userRepo.updatePassword(user.id, data);
      toast.success("password updated");
      setAuth({ user: res });
      resetUpdatePasswordForm();
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
      <form
        onSubmit={basicInfoSubmit(onBasicInfoSubmit)}
        className="h-fit w-full border pb-5 dark:border-main-gray-700"
      >
        <h3 className="mb-5 border-b px-8 pb-5 pt-5 font-semibold capitalize dark:border-b-main-gray-700">
          Basic info
        </h3>

        <div className="mt-4 flex flex-col gap-6 px-8">
          {/* email */}
          <Controller
            control={basicInfoControl}
            name="email"
            defaultValue={""}
            render={({ field, fieldState }) => {
              return (
                <FormItem className="">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                    disabled
                  />
                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              );
            }}
          />

          {/* firstname */}
          <Controller
            control={basicInfoControl}
            name="firstname"
            defaultValue={""}
            render={({ field, fieldState }) => {
              return (
                <FormItem className="">
                  <FormLabel htmlFor="firstname">First name</FormLabel>
                  <Input
                    {...field}
                    id="firstname"
                    placeholder="firstname"
                    className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              );
            }}
          />

          {/* lastname */}
          <Controller
            control={basicInfoControl}
            name="lastname"
            defaultValue={""}
            render={({ field, fieldState }) => {
              return (
                <FormItem className="">
                  <FormLabel htmlFor="lastname">Last name</FormLabel>
                  <Input
                    {...field}
                    id="lastname"
                    placeholder="lastname"
                    className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              );
            }}
          />

          <div className="flex justify-end gap-2">
            <Button
              className="w-full max-w-28"
              disabled={!basicFormDirty || basicFormSubmitting}
            >
              {basicFormSubmitting ? (
                <Spinner className="size-4 text-white" />
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </form>

      <form
        onSubmit={updatePasswordSubmit(onUpdatePasswordSubmit)}
        className="h-fit w-full border pb-5 dark:border-main-gray-700"
      >
        <h3 className="mb-5 border-b px-8 pb-5 pt-5 font-semibold dark:border-b-main-gray-700">
          Update password
        </h3>

        <div className="mt-4 flex flex-col gap-6 px-8">
          {/* currentPassword */}
          <Controller
            control={updatePasswordControl}
            name="currentPassword"
            defaultValue={""}
            render={({ field, fieldState }) => {
              return (
                <FormItem className="">
                  <FormLabel htmlFor="currentPassword">
                    Current password
                  </FormLabel>

                  <PasswordInput
                    {...field}
                    id="currentPassword"
                    placeholder="********"
                    className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              );
            }}
          />

          {/* newPassword */}
          <Controller
            control={updatePasswordControl}
            name="newPassword"
            defaultValue={""}
            render={({ field, fieldState }) => {
              return (
                <FormItem className="">
                  <FormLabel htmlFor="newPassword">New password</FormLabel>

                  <PasswordInput
                    {...field}
                    id="newPassword"
                    placeholder="********"
                    className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              );
            }}
          />

          {/* confirmPassword */}
          <Controller
            control={updatePasswordControl}
            name="confirmPassword"
            defaultValue={""}
            render={({ field, fieldState }) => {
              return (
                <FormItem className="">
                  <FormLabel htmlFor="confirmPassword">
                    Confirm password
                  </FormLabel>

                  <PasswordInput
                    {...field}
                    id="confirmPassword"
                    placeholder="********"
                    className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
                  />
                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              );
            }}
          />

          <div className="flex justify-end gap-2">
            <Button
              disabled={!updatePasswordDirty || updatePasswordSubmitting}
              className="w-full max-w-28"
            >
              {updatePasswordSubmitting ? (
                <Spinner className="size-4 text-white" />
              ) : (
                "Change"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
