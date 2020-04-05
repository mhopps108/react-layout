import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { device } from "../devices";

export default function SideDrawer({ isOpen, toggleOpen }) {
  return (
    <StyledSideDrawer isOpen={isOpen}>
      <CloseButton onClick={toggleOpen}>X</CloseButton>
      <div>SideDrawer</div>
    </StyledSideDrawer>
  );
}

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  @media ${device.min.desktop} {
    display: none;
  }
`;

const StyledSideDrawer = styled.div`
  @media ${device.max.desktop} {
    position: fixed;
    width: 200px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 55px;
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
  }
  @media ${device.min.desktop} {
    grid-area: sidedrawer;
    /* position: fixed; */
    display: flex;
    width: 200px;
    max-width: 70%;
    height: 100%;
    /* left: 0; */
    /* top: 0; */
    background: white;
    padding: 32px 16px;
  }
`;
