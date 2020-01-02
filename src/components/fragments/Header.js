import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h2">Material UI Playground with CRA</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
