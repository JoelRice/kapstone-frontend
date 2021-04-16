//upload cat picture
//upload name of cat
//upload stats
import React from "react";
import { Button, Grid, Typography, TextField, makeStyles } from "@material-ui/core";



function Admin() {

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      justify: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
   
    const classes = useStyles;


  return (
    <Grid container component="main" className={classes.root}>
    <Grid>
       <Typography component="h1" variant="h5">
            Admin Page
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
              label="Cat_Stats"
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
              label="Cat_picture"
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