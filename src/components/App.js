import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import Header from "./fragments/Header";
import Footer from "./fragments/Footer";
import Nav from "./fragments/Nav";
import HomePage from "./pages/Home";
import ButtonsPage from "./pages/Buttons";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/buttons" component={ButtonsPage} />
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default App;
