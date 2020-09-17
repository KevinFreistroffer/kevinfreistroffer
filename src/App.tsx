import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import { API } from "aws-amplify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { appInitialState, AppContext } from "./state/app_state";
import { routes } from "./routes";

async function getData() {
  // let response = await API.get("server", "/server", "");
  // console.log("response", response);
}

function paintRoutes() {
  return routes.map(route => (
    <Route key={route.id} path={route.path}>
      {route.component}
    </Route>
  ));
}

function App() {
  useEffect(() => {
    console.log(API);
    getData();
  }, []);
  return (
    <Router>
      <AppContext.Provider value={{ title: "Kevin Freistroffer", routes: [] }}>
        <div className="App">
          <Header routes={routes}></Header>
          <Switch>{paintRoutes()}</Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
