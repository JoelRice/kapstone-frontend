//upload cat picture
//upload name of cat
//upload stats
import React from "react";
import { Button, Grid, IconButton, Typography, TextField, makeStyles , ImageUpload} from "@material-ui/core";



function Admin() {

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      align: 'center',  
    },
    h1: {
      color: "#FFFFFF",
      align: "center"
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    catIcon: {
      color: "gray",
      margin: 10
    }
  }));

  const classes = useStyles;

  /*handleUploadClick=((event)=> {
    const file = event.target.files[0];
    const reader = new FileReader();
    let url = reader.readAsDataURL(file);
  })*/


  return (
    <Grid container component="main" className={classes.root}>
    <Grid>
       <Typography className={classes.heading1} variant="h3">
         <h1 align ="center" font-color="#FFFFFF">Admin Page</h1>
          </Typography>
          <form className="form">
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

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Cat_picture"
              label="Cat Picture"
              name="Stats"
              autoComplete="URL"
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
  )}
export default Admin;
