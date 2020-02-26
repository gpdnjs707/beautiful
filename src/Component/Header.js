import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import "../css/Header.css";

const Header = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 10px;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 5% 1fr;
  align-items: center;
  z-index: 10;
  &.navbar1 {
    background-color: rgba(255, 255, 255, 0.9);
    -webkit-transition: background-color 0.5s, -webkit-transform 0.5s;
    transition: width background-color 0.5s, transform 0.5s;
  }
`;

const Logo = styled.div`
  align-self: center;
  justify-self: center;
  width: 40px;
  height: 40px;
  background-image: url("https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: 40px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
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

export default withRouter(({ location: { pathname } }) => (
  <Header id="nav">
    <SLink to="/">
      <Logo></Logo>
    </SLink>
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
  </Header>
));
