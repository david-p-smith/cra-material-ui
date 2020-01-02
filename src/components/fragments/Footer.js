import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign: "center"
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <AppBar className={classes.appBar}>
        <p>Site by David. &copy; 2020 David Smith.</p>
      </AppBar>
    </footer>
  );
}

export default Footer;
