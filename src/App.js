import React, { useState } from "react";
import { Header, SideDrawer, Content, Toolbar, Footer } from "./components";
import styled, { css } from "styled-components";
// import "./styles.css";
import { device } from "./devices";

const StyledApp = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* background: black; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55px 45px 1fr 45px;

  @media ${device.min.table} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 55px 45px 1fr;
  }
  @media ${device.min.desktop} {
    display: grid;
    grid-template-columns: 200px 800px;
    grid-template-rows: 55px 45px 1fr;
  }
`;

export default function App() {
  const [sideDrawerVisable, setSideDrawerVisable] = useState(false);
  const toggleSideDrawer = () => {
    console.log("toggleSideDrawer clicked - App");
    setSideDrawerVisable(!sideDrawerVisable);
  };
  return (
    <StyledApp>
      <Header toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer
        isOpen={sideDrawerVisable}
        toggleSideDrawer={toggleSideDrawer}
      />
      <Toolbar />
      <Content />
      <Footer />
    </StyledApp>
  );
}
