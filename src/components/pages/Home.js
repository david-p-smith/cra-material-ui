import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Home() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper>
            <h1>Product 1</h1>
            <p>Product blurb here</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <h1>Product 1</h1>
            <p>Product blurb here</p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <h1>Product 1</h1>
            <p>
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here. Product blurb here. Product blurb here.
              Product blurb here.{" "}
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
