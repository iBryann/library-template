import React, { useRef } from "react";

import { SIZE_ENUM } from "../../types";
import { ButtonProps } from "./types";

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
      onClick(event);
    }
  }

  return (
    <button {...props} ref={ref} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};
