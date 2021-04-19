//upload cat picture
//upload name of cat
//upload stats
import React from "react";

import { Collections, Search, AddPhotoAlternate } from "@material-ui/icons";

import {
  Button,
  Grid,
  Fab,
  IconButton,
  Typography,
  TextField,
  makeStyles,
  ImageUpload,
  CardContent,
} from "@material-ui/core";

function Admin() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      align: "center",
    },
    h1: {
      color: "#FFFFFF",
      align: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    catIcon: {
      color: "gray",
      margin: 10,
    },
  }));

  const classes = useStyles;

  // const state = {
  //   mainState: "initial", // initial, search, gallery, uploaded
  //   imageUploaded: 0,
  //   selectedFile: null,
  // };

  // //remove
  // const handleUploadClick = (event) => {
  //   console.log();
  //   var file = event.target.files[0];
  //   const reader = new FileReader();
  //   var url = reader.readAsDataURL(file);

  //   reader.onloadend = function (e) {
  //     this.setState({
  //       selectedFile: [reader.result],
  //     });
  //   }.bind(this);
  //   console.log(url);

  //   this.setState({
  //     mainState: "uploaded",
  //     selectedFile: event.target.files[0],
  //     imageUploaded: 1,
  //   });
  // };

  // const handleSearchClick = () => {
  //   this.setState({
  //     mainState: "search",
  //   });
  // };

  // const handleGalleryClick = () => {
  //   this.setState({
  //     mainState: "gallery",
  //   });
  // };

  // const renderInitialState = () => {
  //   const { classes, theme } = this.props;
  //   const { value } = this.state;
  // };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid>
        <form className="form" /*onSubmit={handleSubmit(onSubmit)}*/>
          <Typography className={classes.heading1} variant="h3">
            <h1 align="center" font-color="#FFFFFF">
              Admin Page
            </h1>
          </Typography>

          <Grid container justify="center" alignItems="center">
            <CardContent>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                // onChange={this.handleUploadClick}
              />
              <label htmlFor="contained-button-file">
                <Fab component="span" className={classes.button}>
                  <AddPhotoAlternate />
                </Fab>
              </label>
              <Fab className={classes.button}>
                <Search />
              </Fab>
              <Fab className={classes.button}>
                <Collections />
              </Fab>
            </CardContent>
          </Grid>

          <input /*ref={register}*/ type="file" name="picture" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className="form"
          >
            Submit
          </Button>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Cat_Name"
            label="Cat Name"
            name="cat"
            autoComplete="cat"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className="form"
          >
            Submit
          </Button>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="stats"
            label="Cat Stats"
            name="Stats"
            autoComplete="Stats"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className="form"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
export default Admin;
