import React from "react";
import styled from "styled-components";
import WithRouter from "./WithRouter copy";

const Header = styled.header`
  width: 100vw;
  height: 60px;
  padding: 0 10px;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  grid-template-columns: 25% 1fr;
  align-items: center;
  z-index: 10;
  &.navbar1 {
    background-color: rgba(255, 255, 255, 0.9);
    -webkit-transition: background-color 0.5s, -webkit-transform 0.5s;
    transition: width background-color 0.5s, transform 0.5s;
  }
`;

const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;

    width: 100%;
  }
  & img {
    width: 30px;
    height: 100%;
    object-fit: cover;
  }
  &.hidden {
    display: none;
  }
`;

class Nav extends React.Component {
  state = {
    isMenuClicked: false,
    isMenuOpened: false
  };

  handleMenuClick = () => {
    const { isMenuClicked, isMenuOpened } = this.state;

    this.setState({
      isMenuClicked: !isMenuClicked,
      isMenuOpened: !isMenuOpened
    });
  };

  handleMenuClose = () => {
    const { isMenuClicked, isMenuOpened } = this.state;

    this.setState({
      isMenuClicked: false,
      isMenuOpened: false
    });
  };

  render() {
    const { isMenuClicked, isMenuOpened } = this.state;
    const { handleMenuClick, handleMenuClose } = this;

    return (
      <>
        <Header id="nav">
          <WithRouter
            menuOpen={isMenuOpened}
            menuClose={handleMenuClick}
            refresh={handleMenuClose}
          />
          <MenuIcon
            onClick={() => this.handleMenuClick()}
            className={isMenuClicked ? "hidden" : null}
          >
            <img src={require("../assets/icons8-menu.png")}></img>
          </MenuIcon>
        </Header>
      </>
    );
  }
}

export default Nav;
