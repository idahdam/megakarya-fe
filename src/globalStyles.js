import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  
  html {
    max-width: 100%;
    overflow-x: hidden;
  }
  body {
    @media screen and (max-width: 480px) {
        overflow-x: hidden;
    }
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.a`
  border-radius: 50px;
  background: #6358f8;
  white-space: nowrap;
  padding: 14px 38px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  letter-spacing: 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0467fb;
  }
`;

export default GlobalStyle;