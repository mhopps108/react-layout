import React from "react";
import styled from "styled-components/macro";

const StyledToolbar = styled.div`
  grid-area: toolbar;
  position: sticky;
  top: 0;
  height: 45px;
  display: flex;
  border: 1px solid green;
  background-color: yellow;
`;

export default function Toolbar({ tempProps }) {
  return (
    <StyledToolbar>Popular - Top Rated - Now Playing - Upcomming</StyledToolbar>
  );
}
