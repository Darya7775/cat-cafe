import styled from "styled-components";
import { ReactComponent as LeftArrow } from "/src/assets/marker.svg";

export const AccorWrap = styled.div`
  width: 100%;
  height: 0;

  position: relative;
  overflow: hidden;
`;

export const Button = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  user-select: none;

  background-color: #f6f6f6;
`;

export const Marker = styled(LeftArrow)`
  transform: rotate(${(props) => (props.open ? "180deg" : "0deg")}) scale(0.7);
  transition: transform 0.2s ease-out;
`;
