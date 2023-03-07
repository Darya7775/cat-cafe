import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/base/nav/nav";
import { StyleHeader } from "./style";

function Header() {
  return (
    <StyleHeader>
      <Logo />
      <Nav />
    </StyleHeader>
  );
}

export default Header;
