import React, { useState, useEffect, useContext } from "react";
// import Perf from "react-addons-perf";
import NavBar from "./components/NavBar";

import { AppContext, AppState } from "../state/app_state";
import "./styles.scss";
import { Route } from "../routes";

type Props = {
  routes: Route[];
};

const Header: React.FC<Props> = (props: Props) => {
  useEffect(() => {}, []);

  let context = React.useContext(AppContext);
  return (
    <header id="app-header" className="flex row">
      <NavBar title={context.title} routes={props.routes}></NavBar>
    </header>
  );
};

export default Header;
