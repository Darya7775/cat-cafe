import React from "react";
import { StyledTitle } from "./style";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

function Title({ children, size, level, className }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
