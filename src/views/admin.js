import React from "react";

import {
  Grid,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import NewPetForm from "../components/newPetForm";
import NewProductForm from "../components/newProductForm";

const useStyles = makeStyles((theme) => ({
  headers: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

function Admin() {
  const classes = useStyles();
  return (
    <Grid container component="main" justify="center">
      <Grid>
        <Typography
          className={classes.headers}
          component="h1"
          variant="h3"
        >
          Admin Page
        </Typography>
        <NewPetForm />
        <NewProductForm />
      </Grid>
    </Grid>
  );
}
export default Admin;
