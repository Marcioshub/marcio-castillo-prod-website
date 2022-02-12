import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Messages from "./pages/Messages";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
