import React, { useState, useEffect, useContext } from "react";
import NavBar from "./components/NavBar";

import { AppContext } from "../state/app_state";
import "./styles.scss";
import { Route } from "../routes";
interface Props {
  routes: Route[];
}

function Header(props: Props) {
  let context = React.useContext(AppContext);
  return (
    <header id="app-header" className="flex row">
      <NavBar title={context.title} routes={props.routes}></NavBar>
    </header>
  );
}

export default Header;
