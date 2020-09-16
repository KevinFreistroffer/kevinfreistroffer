import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import { API } from "aws-amplify";

function App() {
  useEffect(async () => {
    const response = await API.get("/server/data");
    console.log("response", response);
  });
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
