import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledButton } from "./style";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: "/",
    button: (
      <StyledButton minWidth={260} link="/">
        Главная
      </StyledButton>
    )
  },
  {
    to: "/buy",
    button: (
      <Button minWidth={260} link="/buy">
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const curUrl = useLocation().pathname;
  return (
    <nav className="header__nav">
      {buttons
        .filter((button) => button.to !== curUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
