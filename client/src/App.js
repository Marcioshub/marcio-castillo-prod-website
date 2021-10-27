import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
