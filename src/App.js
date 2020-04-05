import React, { useState } from "react";
import { Header, SideDrawer, Content, Toolbar, Footer } from "./components";
import styled, { css } from "styled-components";
// import "./styles.css";
import { device } from "./devices";

const StyledApp = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* background: black; */
`;

export default function App() {
  const [drawerVisable, setDrawerVisable] = useState(false);
  const toggleSideDrawer = () => {
    console.log("toggleSideDrawer clicked - App");
    setDrawerVisable(!drawerVisable);
  };
  return (
    <StyledApp>
      <Header toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer isOpen={drawerVisable} toggleSideDrawer={toggleSideDrawer} />
      <Toolbar />
      <Content />
      <Footer />
    </StyledApp>
  );
}
