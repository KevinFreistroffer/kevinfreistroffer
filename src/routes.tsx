import React, { Component, FunctionComponent } from "react";
import * as uuid from "uuid";

export type Route = {
  id: string;
  path: string;
  text: string;
  component: FunctionComponent | Component;
};

export const routes: Route[] = [
  {
    id: uuid.v4(),
    path: "/portfolio",
    text: "Portfolio",
    component: function Portfolio() {
      return <div>portfolio</div>;
    }
  },
  {
    id: uuid.v4(),
    path: "/contact",
    text: "Contact",
    component: function Contact() {
      return <div>contact</div>;
    }
  },
  {
    id: uuid.v4(),
    path: "/about",
    text: "About",
    component: function About() {
      return <div>about</div>;
    }
  },
  {
    id: uuid.v4(),
    path: "/travelling",
    text: "Travelling",
    component: function Travelling() {
      return <div>Travelling</div>;
    }
  },
  {
    id: uuid.v4(),
    text: "Home",
    path: "/",
    component: function Home() {
      return <div>Home</div>;
    }
  }
];
