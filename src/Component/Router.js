import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "../Routes/Home";
import About from "../Routes/About";
import Portfolio from "../Routes/Portfolio";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
