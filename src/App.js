import React, { useState } from "react";
import "./styles.css";
import { Header, SideDrawer } from "./components";

export default function App() {
  const [sideDrawerVisable, setSideDrawerVisable] = useState(false);
  const toggleSideDrawer = () => {
    console.log("toggleSideDrawer clicked - App");
    setSideDrawerVisable(!sideDrawerVisable);
  };
  return (
    <div className="App">
      <h1>The grid-area Property</h1>
      <div class="grid-container">
        <Header toggleSideDrawer={toggleSideDrawer} />
        <SideDrawer
          isOpen={sideDrawerVisable}
          toggleSideDrawer={toggleSideDrawer}
        />
        {/* <div class="sidebar">Sidebar</div> */}
        <div class="toolbar">Toolbar</div>
        <div class="main">Main</div>
        <div class="footer">Footer</div>
      </div>
    </div>
  );
}
