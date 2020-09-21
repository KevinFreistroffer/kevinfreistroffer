import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Route } from "../../routes";

function NavBar(props: { title: string; routes: Route[] }) {
  return (
    <nav
      id="app-navbar"
      className="flex row align-center justify-space-between"
    >
      <h1>{props.title}</h1>
      <MenuIcon id="menu-icon" />
      {/*<Icon>star</Icon>*/}
      <ul className="row">
        {props.routes.map((route, index) => (
          <li key={index + 1}>
            <Link key={route.id} to={route.path}>
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
