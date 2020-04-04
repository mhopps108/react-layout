import React, { useState, useEffect } from "react";

const styles = {
  sidedrawerANI: {
    position: "fixed",
    width: "200px",
    maxWidth: "70%",
    height: "100%",
    left: "0",
    top: "0",
    zIndex: "200",
    background: "white",
    padding: "32px 16px",
    boxSizing: "border-box",
    transition: "transform 0.3s ease-out",
    transform: "translateX(-100%)"
  },
  open: {
    transform: "translateX(0) !important"
  },
  close: {
    transform: "translateX(-100%)"
  }
};

function SideDrawer({ isOpen, toggleSideDrawer }) {
  // const addClass = isOpen ? "open" : "close";
  // const addClass = isOpen ? styles.open : {};

  useEffect(() => {
    // styles.sidedrawerANI.transform = isOpen
    //   ? "translateX(0)"
    //   : "translateX(-100%)";
    const move = isOpen
      ? { transform: "translateX(0)" }
      : { transform: "translateX(-100%)" };
    styles.sidedrawerANI = { ...styles.sidedrawerANI, ...move };
  }, [isOpen]);

  return (
    // <div style={{ ...styles.sidedrawerANI, ...addClass }}>
    <div style={styles.sidedrawerANI}>
      <button onClick={toggleSideDrawer}>X</button>
      <div>SideDrawer</div>
    </div>
  );
}

export default SideDrawer;
