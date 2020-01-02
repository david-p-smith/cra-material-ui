import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./fragments/Header";
import Nav from "./fragments/Nav";
import HomePage from "./pages/Home";
import ButtonsPage from "./pages/Buttons";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/buttons" component={ButtonsPage} />
      </Switch>
    </>
  );
}

export default App;
