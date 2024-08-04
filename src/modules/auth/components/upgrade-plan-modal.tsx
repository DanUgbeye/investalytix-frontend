import { Container } from "@/components/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UpgradePlanModal() {
  const path = usePathname();
  const upgradePlanModalOpen = useAppStore(
    ({ upgradePlanModalOpen }) => upgradePlanModalOpen
  );
  const { toggleUpgradePlanModal } = useAppStore();

  function handleClose() {
    toggleUpgradePlanModal();
  }

  return (
    <Dialog open={upgradePlanModalOpen} onOpenChange={toggleUpgradePlanModal}>
      <Container>
        <DialogContent
          hideCloseBtn
          className="space-y-8 border-main-gray-700 bg-main-gray-900 px-10 pb-12 pt-5 max-sm:w-[min(95%,30rem)] sm:px-16"
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

          <DialogHeader className="">
            <div className="flex justify-center pb-6">
              <img src="/assets/decors/upgrade.svg" className="size-28" />
            </div>

            <DialogTitle className="mx-auto w-full max-w-[18rem] text-center text-2xl font-bold text-white dark:text-main-gray-300">
              Upgrade to Premium
            </DialogTitle>

            <DialogDescription className="text-center">
              Unlock premium access to gain entry to 30 years of data, enabling
              comprehensive analysis for better-informed decisions and deeper
              insights into long-term trends.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col items-center gap-5">
              <Link
                href={`${PAGES.PRICING}?redirect=${path}`}
                className={cn(buttonVariants({}), "w-full max-w-xs")}
                onClick={handleClose}
              >
                Upgrade Plan
              </Link>

              <p className="text-sm text-white dark:text-main-gray-300">
                <Button
                  variant={"link"}
                  className="font-bold underline-offset-4 hover:underline"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </p>
            </div>
          </div>
        </DialogContent>
      </Container>
    </Dialog>
  );
}
