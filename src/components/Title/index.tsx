import React from "react";
import { HTMLAttributes, ReactNode } from "react";

type TitleVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  variant?: TitleVariants;
  color?: string;
}

export const Title = ({
  className,
  children,
  variant = "h1",
  color = "",
  ...props
}: TitleProps) => {
  const Element = variant;

  return (
    <Element
      className={"t-title " + className}
      {...props}
      {...(color ? { style: { ...props.style, color } } : {})}
    >
      {children}
    </Element>
  );
};
