import React, { useContext, useRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../utils";
import { SIZE_ENUM } from "../../types";
import { ButtonProps } from "./types";

const buttonVariants = cva<any>(
  [
    "flex",
    "gap-3",
    "flex-row",
    "items-center",
    "justify-center",
    "rounded-full",
    "transition-all",
    "cursor-pointer",
    "focus-visible:ring",
    "font-medium",
    "disabled:text-[#CCCCCC]",
    "disabled:bg-transparent",
    "disabled:shadow-none",
    "disabled:select-none",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        fab: [
          "shadow-fab",
          "text-white",
          "bg-button-primary",
          "hover:bg-button-primary_hover",
          "active:bg-button-primary_pressed",
          "focus-visible:ring-button-primary_pressed",
          "disabled:bg-[#E6E6E6]",
        ],
        primary: [
          "text-white",
          "bg-button-primary",
          "hover:bg-button-primary_hover",
          "active:bg-button-primary_pressed",
          "focus-visible:ring-button-primary_pressed",
          "disabled:bg-[#E6E6E6]",
        ],
        secondary: [
          "text-button-secondary_text",
          "bg-button-secondary",
          "hover:text-button-secondary_text_hover",
          "active:bg-button-secondary_pressed",
          "active:text-button-secondary_text",
          "focus-visible:ring-button-secondary_pressed",
          "disabled:bg-[#E6E6E6]",
        ],
        tertiary: [
          "text-button-tertiary_text",
          "bg-button-tertiary",
          "hover:bg-button-tertiary_hover",
          "active:bg-button-tertiary_pressed",
          "focus-visible:ring-button-tertiary_text",
        ],
        neutral: [
          "text-button-neutral_text",
          "bg-button-neutral",
          "hover:text-button-neutral_text_hover",
          "active:bg-button-neutral_pressed",
          "focus-visible:ring-button-neutral_text",
          "focus-visible:text-button-neutral_text",
        ],
        tertiaryNeutral: [
          "text-button-tertiary_neutral_text",
          "bg-button-neutral_tertiary",
          "hover:bg-button-tertiary_neutral_hover",
          "active:bg-button-tertiary_neutral_pressed",
          "focus-visible:ring-button-tertiary_neutral_text",
        ],
        destructive: [
          "text-button-destructive_text",
          "bg-button-destructive",
          "hover:bg-button-destructive_hover",
          "active:bg-button-destructive_pressed",
          "focus-visible:ring-button-destructive_pressed",
        ],
        tertiaryDestructive: [
          "text-button-destructive_tertiary_text",
          "bg-button-destructive_tertiary",
          "hover:bg-button-destructive_tertiary_hover",
          "focus-visible:ring-button-destructive_tertiary_text",
          "active:bg-button-destructive_tertiary_pressed",
          "active:ring-button-destructive_tertiary_pressed",
          "active:text-button-destructive_tertiary_text_hover",
        ],
      },
      size: {
        sm: ["text-xs", "py-2", "px-4"],
        md: ["text-sm", "py-3", "px-5"],
        lg: ["text-base", "py-4", "px-6"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: SIZE_ENUM.MEDIUM,
    },
  }
);

export const Button = ({
  block = false,
  children,
  className,
  closeModal = true,
  onClick,
  size = SIZE_ENUM.MEDIUM,
  type = "button",
  variant,
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) {
      if (closeModal) {
        const intoFooterModal = !!ref.current?.closest(".t-dialog-footer");

        if (intoFooterModal) console.log("close");
      }

      onClick(event);
    }
  }

  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        block ? "w-full" : "",
        buttonVariants({ variant, size, className })
      )}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
