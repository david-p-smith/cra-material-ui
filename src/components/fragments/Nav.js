import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Toolbar } from "@material-ui/core";

function Nav() {
  return (
    <Toolbar>
      <Button>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button>
        <NavLink to="/buttons">Buttons</NavLink>
      </Button>
    </Toolbar>
  );
}

export default Nav;
