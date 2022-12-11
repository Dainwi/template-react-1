import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navdata } from "../data/NavData";
import { RiMenuFoldLine } from 'react-icons/ri';

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

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
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

const MenuBars = styled.div`
 color: #fff;
 font-size: 1.5rem;
 @media screen and (min-width: 768px) {
  display: none;
 }
`;

export const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo>ABSTRACT</Logo>
      <MenuBars>
        <RiMenuFoldLine onClick={toggle}/>
      </MenuBars>
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
