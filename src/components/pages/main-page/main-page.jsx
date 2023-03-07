import React from "react";
import About from "/src/components/blocks/about/about";
import SrarsList from "/src/components/blocks/stars-list/stars-list";
import { StyledMain } from "./style";

function MainPage({ stars }) {
  return (
    <>
      <StyledMain>
        <About />
        <SrarsList stars={stars}></SrarsList>
      </StyledMain>
    </>
  );
}

export default MainPage;
