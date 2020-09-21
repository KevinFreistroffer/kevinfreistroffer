import React, { useEffect } from "react";

import "./styles.scss";
import Header from "../Header";
import { default as Drawer } from "../AppDrawer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { appInitialState, AppContext } from "../state/app_state";
import { routes, Route as RouteType } from "../routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { getData } from "./api";

type Props = {};

const App: React.FC<Props> = (props: Props) => {
  // useEffect(() => {
  //   API.getData();
  // }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appInitialState}>
          <div className="App">
            <Header routes={routes}></Header>
            <Drawer />
            <Switch>
              {routes.map((route, index) => (
                <Route key={route.id} path={route.path}>
                  {route.component}
                </Route>
              ))}
            </Switch>
          </div>
        </AppContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
