import React, { useState } from "react";
import { Header, Main, Footer } from "./components";
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
  const toggleDrawer = () => {
    console.log("toggleSideDrawer clicked - App");
    setDrawerVisable(!drawerVisable);
  };
  return (
    <StyledApp>
      <Header toggleDrawer={toggleDrawer} />
      <Main drawerVisable={drawerVisable} toggleDrawer={toggleDrawer} />
      <Footer />
    </StyledApp>
  );
}
