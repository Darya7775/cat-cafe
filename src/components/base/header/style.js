import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  position: relative;
  height: ${(props) => props.theme.footerHeight};
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
`;
