import {
  Box,
  Container,
  Button,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStore, actions } from "../store/store";
import { Switch, Route, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import KittyCard from "../components/kittyCard";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#cfe8fc",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
}));

function AdoptionsPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useStore((state) => state.dispatch);

  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3">
        Welcome to the Adoption Center
      </Typography>
      <Container className={classes.container} component="main">
        <Grid container>
          <Typography component="h2" variant="h4">
            Adoptable Kitties
          </Typography>
          <Grid item></Grid>
        </Grid>

        <Grid container>
          <Typography component="h2" variant="h4">
            Recently Adopted
          </Typography>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdoptionsPage;
