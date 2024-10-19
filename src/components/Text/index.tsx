import { HTMLAttributes, ReactHTML, ReactNode } from "react";

export type TextVariants =
  | "display-lg"
  | "display"
  | "display-sm"
  | "button-lg"
  | "button"
  | "button-sm"
  | "body-lg"
  | "body"
  | "body-sm"
  | "label-lg"
  | "label"
  | "label-sm"
  | "overline";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof ReactHTML;
  children?: ReactNode;
  variant?: TextVariants;
  color?: string;
}

export const Text = ({
  as: Element = "div",
  className,
  children,
  variant,
  color = "",
  ...props
}: TextProps) => {
  return (
    <Element
      {...props}
      className={"t-text " + className}
      {...(color ? { style: { ...props.style, color } } : {})}
    >
      {children}
    </Element>
  );
};
