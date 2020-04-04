import React from "react";
import styled from "styled-components/macro";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: blue;
  display: flex;
`;

export default function Footer({ tempProps }) {
  return <StyledFooter>Footer</StyledFooter>;
}
