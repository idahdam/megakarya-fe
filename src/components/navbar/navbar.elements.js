import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const Nav = styled.nav`
  background: #101010;
  height: 80px;
  display: flex;
  padding: 0 5%;
  justify-content: center;
  align-items: center;
  font-size: 1.2 rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1366px;
  @media screen and (max-width: 960px) {
    padding: 0;
    width: 65%;
  }
`;

export const NavImg = styled.img`
  padding-top: 2.5%;
  padding-right: 2.5%;
  @media screen and (max-width: 960px) {
    transform: translate(-70%, 0);
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  width: 10%;
  margin-left: 3%;
  margin-bottom: 0rem;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin-left: 0%;
  }
`;

export const NavText = styled.div`
  width: 62.5%;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  height: 100px;
  padding: 0 -5%;
  line-height: 75px;
  text-align: left;
  @media screen and (max-width: 960px) {
    margin: auto;
    padding: 0 2%;
    line-height: 57.5px;
    text-align: center;
    font-size: 0.9rem;
    width: 100%;
    padding: 10px;
  }
`;

// export const NavIcon = styled(FaMagento)`
//   margin-right: 0.5rem;
// `;
export const NavCloseIcon = styled(FaTimes)`
  stroke-width="1";
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {.
    transition: 0.3s ease-in;
    stroke-width="1";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  width: 120%;
  padding-left: 25%;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    padding-left: 0%;
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 100%;
    height: 120vh;
    position: absolute;
    top: 100%;
    left: ${({ click }) => (click ? "0%" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background-color: #101010;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding: 0 3.5%;
  margin-bottom: 1rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #101522;
    transition: all 1s ease;
    border-bottom: 2px solid white;
  }
  @media screen and (max-width: 960px) {
    width: 50%;
    &:hover {
      border-bottom: 2px solid #101522;
      transition: all 1s ease;
      border-bottom: 2px solid white;
    }
  }
`;

export const NavItemDropdown = styled.li`
  height: 80px;
  padding: 0 3.5%;
  margin-bottom: 1rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #101522;
    transition: all 1s ease;
    border-bottom: 2px solid white;
  }
  @media screen and (max-width: 960px) {
    width: 50%;
    &:hover {
      border-bottom: 2px solid #101522;
      transition: all 1s ease;
      border-bottom: 2px solid white;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem 0rem 0rem 0;
    width: 100%;
    display: table;
    &:hover {
      color: #c4c4c4;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
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

export const NavHrefDropdown = styled.a`
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  width: 100%;
  margin: auto;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem 0rem 0rem 0;
    width: 100%;
    display: table;
    &:hover {
      color: #c4c4c4;
      transition: all 0.3s ease;
    }
  }
`;
export const NavHref = styled.a`
  transition: all 0.3s ease;
  display: flex;
  margin: auto;
  text-decoration: none;
  text-indent: 15px;
  padding: 1.5rem 1.5rem;
  margin: 0 -1.45rem;
  background-color: #cfcfcf;
  color: black;
  opacity: 0.5;
  :hover {
    transition: all 0.3s ease;
    opacity: 1;
    color: #fff;
    background-color: #101010;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    color: white;
    background-color: transparent;
    padding: 1rem 0rem 1rem 0rem;
    width: 100%;
    display: table;
    &:hover {
      bacground-color: #101010;
      transition: all 0.3s ease;
    }
  }
`;
export const NavArrowUp = styled(FiChevronUp)`
  padding-left: 0.75rem;
  cursor: pointer;
`;
export const NavArrowDown = styled(FiChevronDown)`
  padding-left: 0.75rem;
  cursor: pointer;
  transition: all 1s ease;
`;
export const NavDropdown = styled.div`
  display: block;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    position: static;
    width: 100%;
    transform: translate(0%, 0%);
  }
`;

export const NavButton = styled.button`
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`;
export const NavbarDropdownData = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
