import { createContext } from "react";
import { Route } from "../routes";

export type AppState = {
  title: string;
  routes: Route[];
};

export const appInitialState: AppState = {
  title: "Kevin Freistroffer",
  routes: []
};

export const AppContext = createContext<AppState>(appInitialState);
