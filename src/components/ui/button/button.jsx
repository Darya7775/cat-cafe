import React from "react";
import { StyledButton } from "./style.js";

function Button({ children, link, type }) {
  return (
    <StyledButton type={type} {...(link ? { to: link } : { as: "button" })}>
      {children}
    </StyledButton>
  );
}

export default Button;
