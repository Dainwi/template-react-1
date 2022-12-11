import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navdata } from "../data/NavData";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 6px;
  text-shadow: 0px 5px 10px #ff4467;
  font-family: "Unbounded", cursive;
`;
const NavItem = styled.ul`
  opacity: 68%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Ubuntu", sans-serif;
  margin: 0 0 0 3rem;
  line-height: 1I;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Logo>ABSTRACT</Logo>
      <NavItem>
        {Navdata.map((item, index) => (
          <NavLinks to={item.link} key={index}>
            {item.title}
          </NavLinks>
        ))}
      </NavItem>
    </Nav>
  );
};
