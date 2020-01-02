import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

function Nav() {
  return (
    <nav>
      <Button>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button>
        <NavLink to="/buttons">Buttons</NavLink>
      </Button>
    </nav>
  );
}

export default Nav;
