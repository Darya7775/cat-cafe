import React from "react";
import { AccorWrap, Button, Marker } from "./style";

function Accordion({ children, onChange, height, open }) {
  return (
    <>
      <Button type="button" onClick={onChange}>
        <Marker open={open} />
      </Button>
      <AccorWrap style={{ height }}>{children}</AccorWrap>
    </>
  );
}

export default Accordion;
