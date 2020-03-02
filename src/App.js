import React from "react";
import Router from "./Component/Router";
import GlobalStyles from "./Component/GlobalStyle";

class App extends React.Component {
  state = {
    isMenu: false
  };
  handleMenu = () => {
    const { isMenu } = this.state;

    this.setState({
      isMenu: !isMenu
    });
  };

  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
