import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, StyledFooterCopyright } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <StyledFooterCopyright>Создано 2021</StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
