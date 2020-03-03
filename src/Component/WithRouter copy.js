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
  }

  &.show {
    display: block;
    position: absolute;
    right: 0px;
    z-index: 10;
    top: 0px;
    padding: 10px;
  }
`;

const Logo = styled.div`
  align-self: center;

  width: 40px;
  height: 40px;
  background-image: url("https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-size: 40px;
`;

const CloseBtn = styled.div`
  display: none;
  & img {
    width: 25px;
    height: 25px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
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
  /* border-bottom: 3px solid
    ${props => (props.current ? "#ff7979" : "transparent")}; */
  font-weight: ${props => (props.current ? "bold" : "normal")};
  transition: border-bottom 0.5s ease-in-out;
  & :hover {
    font-weight: bold;
  }
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

class WithRouter extends React.Component {
  render() {
    const {
      location: { pathname },
      menuOpen,
      menuClose,
      refresh
    } = this.props;

    return (
      <>
        <LogoLink to="/">
          <Logo></Logo>
        </LogoLink>
        <MenuWrap className={menuOpen ? "show" : null}>
          <CloseBtn>
            <img
              src={require("../assets/icons8-delete.png")}
              onClick={() => menuClose()}
            />
          </CloseBtn>
          <List>
            <Item current={pathname === "/"} onClick={() => refresh()}>
              <SLink to="/">HOME</SLink>
            </Item>
            <Item current={pathname === "/about"} onClick={() => refresh()}>
              <SLink to="/about">ABOUT</SLink>
            </Item>
            <Item current={pathname === "/portfolio"} onClick={() => refresh()}>
              <SLink to="/portfolio">PORTFOLIO</SLink>
            </Item>
          </List>
        </MenuWrap>
      </>
    );
  }
}

export default withRouter(WithRouter);
