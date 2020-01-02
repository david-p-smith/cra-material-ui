import React from "react";
import { Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <h1>Material UI Playground with CRA</h1>
        <Button variant="contained" color="primary">
          Hello World!
        </Button>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
