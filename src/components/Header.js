import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { device } from "../devices";

const StyledHeader = styled.div`
  border: 1px solid green;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 55px;
  background-color: blue;
  z-index: 100;

  transition: transform 0.25s ease;
  ${props =>
    props.show
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(-100%);
        `}
`;

export default function Header({ toggleDrawer }) {
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
      setShowNav(document.body.getBoundingClientRect().top > scrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <StyledHeader show={showNav} ref={ref}>
      <Navbar>
        <NavGroup>
          <button onClick={toggleDrawer}>open</button>
          <button>MMDb</button>
        </NavGroup>
        <NavGroupPages>
          <NavLink href="_blank">List</NavLink>
          <NavLink href="_blank">Discovery</NavLink>
          <NavLink href="_blank">Releases</NavLink>
        </NavGroupPages>
        <NavGroup>
          <button>Search</button>
          <button>Settings</button>
        </NavGroup>
      </Navbar>
    </StyledHeader>
  );
}

const Navbar = styled.nav`
  border: 1px solid orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
`;

const NavGroup = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-content: center; */
  border: 1px solid red;
`;

const NavGroupPages = styled(NavGroup)`
  display: none;
  @media ${device.min.tablet} {
    display: flex;
  }
`;

const NavLink = styled.a`
  border: 1px solid yellow;
  color: white;
  font-size: 1.3rem;
`;
