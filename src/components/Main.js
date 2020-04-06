import React from "react";
import styled from "styled-components/macro";
import { Toolbar, SideDrawer, Content } from "./";
import { device } from "../devices";

const StyledMain = styled.div`
  margin-top: 55px;
  display: grid;
  grid-template-areas:
    "toolbar"
    "content";
  grid-template-columns: 1fr;
  grid-template-rows: 45px 1fr;

  @media ${device.min.desktop} {
    display: grid;
    grid-template-areas:
      "sidedrawer toolbar"
      "sidedrawer content";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 45px 1fr;
  }
`;

export default function Main({ drawerVisable, toggleDrawer }) {
  return (
    <StyledMain>
      <Toolbar />
      <SideDrawer isOpen={drawerVisable} toggleOpen={toggleDrawer} />
      <Content />
    </StyledMain>
  );
}
