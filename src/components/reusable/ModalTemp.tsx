import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Modal({
  triggerText = "Open Modal",
  title = "Default Title",
  description = "Default description goes here.",
  confirmText = "Confirm",
  onConfirm,
  children,
  triggerButtonClassName,
  loading,
  success,
  onCancel,
  error,
}: {
  triggerText: string;
  title: string;
  description: string;
  confirmText: string;
  onConfirm: () => void;
  children: ReactNode;
  triggerButtonClassName?: string;
  loading?: boolean;
  success?: boolean;
  onCancel?: () => void; // Optional cancel handler
  error: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("w-full", triggerButtonClassName)}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{success ? "" : title}</DialogTitle>
          <DialogDescription>{success ? "" : description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter>
          {success ? (
            <Button
              type="button"
              className="bg-red-600 text-white"
              onClick={onCancel} // Reset form on cancel
            >
              Cancel
            </Button>
          ) : (
            <>
              <Button
                type="button"
                className={`${
                  loading
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-blue-600 text-white"
                }`}
                onClick={onConfirm}
              >
                {loading ? "Sending..." : confirmText}
              </Button>

              {error && (
                <Button
                  type="button"
                  className="bg-gray-300 text-black sm:mb-0 mb-3"
                  onClick={onCancel} // Optional cancel button for non-success states
                >
                  Cancel
                </Button>
              )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
