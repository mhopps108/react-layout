import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { device } from "../devices";

export default function SideDrawer({ isOpen, toggleOpen }) {
  const tmdblist = ["Popular", "New Releases", "Upcoming", "Top Rated"];
  return (
    <StyledSideDrawer isOpen={isOpen}>
      <CloseButton onClick={toggleOpen}>X</CloseButton>
      <div>SideDrawer</div>
      <h4>TMDb</h4>
      {tmdblist.map(item => {
        return <p key={item}>{item}</p>;
      })}
      <h4>IMDb</h4>
      {tmdblist.map(item => {
        return <p key={item}>{item}</p>;
      })}
      <h4>Trakt</h4>
      {tmdblist.map(item => {
        return <p key={item}>{item}</p>;
      })}
      <h4>More</h4>
      {tmdblist.map(item => {
        return <p key={item}>{item}</p>;
      })}
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
  border: 1px solid orange;
  /* position: sticky; */
  top: 0;
  bottom: 0;
  height: 100%;
  /* width: 200px; */
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 32px 16px;

  @media ${device.max.desktop} {
    // hidden
    position: fixed;
    width: 200px;
    left: 0;
    top: 55px;
    /* top: 0px; */
    z-index: 200;

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
    // shown
    grid-area: sidedrawer;
    position: fixed;
    /* height: 100vh; */
    /* width: 200px; */
    /* left: 0; */
    /* top: 55px; */
  }
`;
