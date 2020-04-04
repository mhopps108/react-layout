import React from "react";
import styled, { css } from "styled-components/macro";

const StyledHeader = styled.div`
  border: 1px solid green;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: blue;
`;

const Navbar = styled.nav`
  border: 1px solid orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
`;

const NavGroup = styled.div`
  border: 1px solid red;
  ${props =>
    props.hideOnPhone &&
    css`
      display: none;
    `}
`;

const NavLink = styled.a`
  border: 1px solid yellow;
  color: white;
  font-size: 1.3rem;
`;

export default function Header({ toggleSideDrawer }) {
  return (
    <StyledHeader>
      <Navbar>
        <NavGroup>
          <button onClick={toggleSideDrawer}>open</button>
          <button>MMDb</button>
        </NavGroup>
        <NavGroup hideOnPhone>
          <NavLink href="_blank">List</NavLink>
          <NavLink href="_blank">Discovery</NavLink>
          <NavLink href="_blank">Releases</NavLink>
        </NavGroup>
        <NavGroup>
          <button>Search</button>
          <button>Settings</button>
        </NavGroup>
      </Navbar>
    </StyledHeader>
  );
}
