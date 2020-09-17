import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { AppContext } from "../state/app_state";
import "./header_styles.scss";
import { Route } from "../routes";

interface Props {
  routes: Route[];
}

function Header(props: Props) {
  let context = React.useContext(AppContext);
  return (
    <header id="app-header" className="flex row ">
      <NavBar title={context.title} routes={props.routes}></NavBar>
    </header>
  );
}

function NavBar(props: { title: string; routes: Route[] }) {
  return (
    <nav id="app-navbar" className="flex row align-center">
      <h1>{props.title}</h1>
      <ul>
        {props.routes.map(route => (
          <Link key={route.id} to={route.path}>
            {route.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
