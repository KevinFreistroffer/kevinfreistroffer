import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { AppContext } from "../state/app_state";
import "./header_styles.scss";
import { Route } from "../routes";

interface Props {
  routes: Route[];
}

function NavBar(props: { title: string; routes: Route[] }) {
  return (
    <nav
      id="app-navbar"
      className="flex row align-center justify-space-between"
    >
      <h1>{props.title}</h1>
      <Icon>
      <ul className="flex row">
        {props.routes.map(route => (
          <li>
            <Link key={route.id} to={route.path}>
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
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
