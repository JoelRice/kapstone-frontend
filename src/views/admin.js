import React from "react";
import {
  Grid,
  Typography,
  Container
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
    <Container justify="center" align="center">
      {/* bring this to the middle of the page */}
    <Grid container component="main" justify="center" align="center"
    style={{backgroundColor:"#cfe8fc", height: "1075px", width:"1000px"}}>
      <Grid>
        <Typography
          className={classes.headers}
          component="h1"
          variant="h2"
        >
          Admin Page
        </Typography>
        <NewPetForm />
        <NewProductForm />
      </Grid>
    </Grid>
    </Container>
  );
}
export default Admin;
