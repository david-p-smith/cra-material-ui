import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./fragments/Header";
import HomePage from "./pages/Home";
import ButtonsPage from "./pages/Buttons";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/buttons" component={ButtonsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
