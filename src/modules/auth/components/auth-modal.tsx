import { Container } from "@/components/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function AuthModal() {
  const path = usePathname();
  const loginModalOpen = useAppStore(({ loginModalOpen }) => loginModalOpen);
  const { toggleLoginModal, toggleLoginModalLock } = useAppStore();

  function handleClose() {
    toggleLoginModalLock(false);
    toggleLoginModal();
  }

  return (
    <Dialog open={loginModalOpen} onOpenChange={toggleLoginModal}>
      <Container>
        <DialogContent
          hideCloseBtn
          className="space-y-8 border-main-gray-700 bg-main-gray-900 px-10 pb-24 pt-12 max-sm:w-[min(95%,30rem)] sm:px-16 sm:pt-20"
        >
          <img
            src="/assets/decors/login-ellipse-left.svg"
            className="absolute left-0 top-0"
          />
          <img
            src="/assets/decors/login-ellipse-right.svg"
            className="absolute -top-8 right-0"
          />
          <img
            src="/assets/decors/dots.svg"
            className="absolute -bottom-0 right-0"
          />

          <DialogHeader className="space-y-0">
            <DialogTitle className="mx-auto w-full max-w-[18rem] text-center text-2xl font-bold text-white dark:text-main-gray-300">
              To continue exploring, sign up for free
            </DialogTitle>
            <DialogDescription hidden />
          </DialogHeader>

          <div className="flex flex-col gap-y-4">
            <div className="flex justify-center">
              <Button
                variant={"outline"}
                className="w-full max-w-xs gap-x-2 bg-white hover:bg-main-gray-200 dark:text-black dark:hover:bg-main-gray-200 dark:hover:text-black"
                onClick={handleClose}
              >
                <FcGoogle className="size-7" />
                <span>Continue with Google</span>
              </Button>
            </div>

            <Separator className="bg-main-gray-200 dark:bg-main-gray-500" />

            <div className="flex flex-col items-center gap-5">
              <Link
                href={`${PAGES.SIGNUP}?redirect=${path}`}
                className={cn(buttonVariants({}), "w-full max-w-xs")}
                onClick={handleClose}
              >
                Sign up with Email
              </Link>

              <p className="text-sm text-white dark:text-main-gray-300">
                Already have an account?{" "}
                <Link
                  href={`${PAGES.LOGIN}?redirect=${path}`}
                  className="font-bold text-primary-base underline-offset-4 hover:underline"
                  onClick={handleClose}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </DialogContent>
      </Container>
    </Dialog>
  );
}
