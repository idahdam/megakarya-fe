// import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link as Scroll } from "react-scroll";

import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  z-index: 999;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  width: 100%;
  background-color: #101010;
  font-size: 1.2rem;
  top: 0;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 960px) {
    opacity: 100%;
    position: fixed;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const Logo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  margin-left: -20px;
  align-items: center;
  // background: #000;
`;

export const Icon = styled.img`
  width: 100px;
  &:hover {
    width: 120px;
    transition: all 0.5s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: ${({ toggle }) => (toggle ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ toggle }) => (toggle ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 5px solid #2f3a56;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Poppins";
  font-weight: bold;
  color: #000;
  cursor: default;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #000;
  }
  &:hover {
    color: #f7f2ec;
    transition: 0.3s ease-in-out;
  }
`;

export const LinkScroll = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Poppins";
  font-weight: bold;
  color: #bbb;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #000;
  }
  &:hover {
    color: #f7f2ec;
    transition: 0.3s ease-in-out;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  background: ${({ primary }) => (primary ? "#000" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ size }) => (size ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#000")};
    color: #2f3a56;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavButton = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;