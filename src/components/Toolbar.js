import React from "react";
import styled from "styled-components/macro";

const StyledToolbar = styled.div`
  border: 1px solid green;
  background-color: yellow;
  margin-top: 55px;
  height: 45px;
  display: flex;
`;

export default function Toolbar({ tempProps }) {
  return <StyledToolbar>Toolbar</StyledToolbar>;
}
