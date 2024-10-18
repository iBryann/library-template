import React from "react";

import { IProps } from "./types";
import { Container } from "./styles";

export const Tag = ({
  variant = "science",
  size = "md",
  children,
  className = "",
  ...props
}: IProps) => {
  return (
    <Container
      {...props}
      className={"t-tag " + className}
      $size={size}
      $variant={variant}
    >
      {children}
    </Container>
  );
};
