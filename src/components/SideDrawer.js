import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export default function SideDrawer({ isOpen, toggleSideDrawer }) {
  return (
    <StyledSideDrawer isOpen={isOpen}>
      <button onClick={toggleSideDrawer}>X</button>
      <div>SideDrawer</div>
    </StyledSideDrawer>
  );
}

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  ${props =>
    props.isOpen
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-100%);
        `}
`;