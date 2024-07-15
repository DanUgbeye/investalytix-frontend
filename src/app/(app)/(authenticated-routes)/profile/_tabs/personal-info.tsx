"use client";

import { FormLabel } from "@/components/form";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PersonalInfoTab() {
  return (
    <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
      <div className="h-fit w-full border pb-5 dark:border-main-gray-700">
        <h3 className="mb-5 border-b px-8 pb-5 pt-5 font-semibold capitalize dark:border-b-main-gray-700">
          Basic info
        </h3>

        <div className="mt-4 flex flex-col gap-6 px-8">
          {/* first name */}
          <div className="">
            <FormLabel htmlFor="firstname">First name</FormLabel>
            <Input
              id="firstname"
              className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
            />
          </div>

          {/* last name */}
          <div className="">
            <FormLabel htmlFor="lastname">Last name</FormLabel>
            <Input
              id="lastname"
              className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
            />
          </div>

          {/* email */}
          <div className="">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              className="outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button className="w-fit">Save</Button>
            {/* <Button className="w-fit" variant="outline">
                    Cancel
                  </Button> */}
          </div>
        </div>
      </div>

      <div className="h-fit w-full border pb-5 dark:border-main-gray-700">
        <h3 className="mb-5 border-b px-8 pb-5 pt-5 font-semibold dark:border-b-main-gray-700">
          Update password
        </h3>

        <div className="mt-4 flex flex-col gap-6 px-8">
          {/* new password */}
          <div className="">
            <FormLabel htmlFor="new-password">New password</FormLabel>
            <PasswordInput
              id="new-password"
              className="mt-1 outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
            />
          </div>
          {/* confirm new password */}
          <div className="">
            <FormLabel htmlFor="confirm-password">
              Confirm new password
            </FormLabel>
            <PasswordInput
              id="confirm-password"
              className="mt-1 outline-none ring-0 focus-visible:border-primary-light focus-visible:ring-0"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button className="w-fit">Change</Button>
            {/* <Button className="w-fit" variant="outline">
                  Cancel
                </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
