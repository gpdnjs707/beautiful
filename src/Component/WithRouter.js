import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import "../css/Header.css";

const MenuWrap = styled.div`
  width: 100%;

  display: block;
  @media (max-width: 600px) {
    display: none;
    width: 200px;
    height: 400px;
    background-color: white;
    position: relative;
    right: 20px;
  }
`;

const Logo = styled.div`
  align-self: center;

  width: 40px;
  height: 40px;
  background-image: url("https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: 40px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Item = styled.li`
  width: 90px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#ff7979" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const LogoLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export default withRouter(({ location: { pathname } }) => (
  <>
    <LogoLink to="/">
      <Logo></Logo>
    </LogoLink>
    <MenuWrap>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">HOME</SLink>
        </Item>
        <Item current={pathname === "/about"}>
          <SLink to="/about">ABOUT</SLink>
        </Item>
        <Item current={pathname === "/portfolio"}>
          <SLink to="/portfolio">PORTFOLIO</SLink>
        </Item>
      </List>
    </MenuWrap>
  </>
));
