import { createContext } from "react";
import { combineReducers } from "react-redux";
import { Route } from "../routes";

export const rootReducer = combineReducers([]);

// export type AppState = {
//   title: string;
//   routes: Route[];
// };
//
// export const appInitialState: AppState = {
//   title: "Kevin Freistroffer",
//   routes: []
// };
//
// export const AppContext = createContext<AppState>(appInitialState);
