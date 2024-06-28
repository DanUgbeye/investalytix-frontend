import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store";

export default function AuthModal() {
  const loginModalOpen = useAppStore(({ loginModalOpen }) => loginModalOpen);
  const { toggleLoginModal } = useAppStore();

  return (
    <Dialog open={loginModalOpen} onOpenChange={toggleLoginModal}>
      <DialogContent hideCloseBtn>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
