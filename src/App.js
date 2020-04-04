import React, { useState } from "react";
import { Header, SideDrawer, Content, Toolbar, Footer } from "./components";
import styled, { css } from "styled-components";
// import "./styles.css";

export default function App() {
  const [sideDrawerVisable, setSideDrawerVisable] = useState(false);
  const toggleSideDrawer = () => {
    console.log("toggleSideDrawer clicked - App");
    setSideDrawerVisable(!sideDrawerVisable);
  };
  return (
    <div className="App">
      <Header toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer
        isOpen={sideDrawerVisable}
        toggleSideDrawer={toggleSideDrawer}
      />
      <Toolbar />
      <Content />
      <Footer />
    </div>
  );
}
