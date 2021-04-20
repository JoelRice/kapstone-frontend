//upload cat picture
//upload name of cat
//upload stats
import React, { useState } from "react";

import { Collections, Search, AddPhotoAlternate } from "@material-ui/icons";

import {
  Button,
  Grid,
  Fab,
  IconButton,
  Typography,
  TextField,
  ImageUpload,
  CardContent,
} from "@material-ui/core";

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

import { createPet } from '../apis/fetchRequests';
import { useStore, actions } from '../store/store';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#ffffff',
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  headers: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  fileInput: {
    position: "relative",
    zIndex: -2,
    top: "-38px",
    left: "-100px",
    width: "100%",
    '&::before': {
      content: '"____________"',
      color: "#43464d",
      backgroundColor: "#43464d",
      position: "relative",
      left: "88px",
      borderTop: "3px solid #43464d",
      borderBottom: "3px solid #43464d",
    }
  },
  textInput: {
    margin: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
    // '& > .MuiFormLabel-root': {
    //   color: "rgba(255, 255, 255, 0.54)",
    // },
    // '& > .MuiInputBase-root': {
    //   color: "rgba(255, 255, 255, 0.87)",
    // },
    // '& .MuiOutlinedInput-notchedOutline': {
    //   borderColor: "rgba(255, 255, 255, 0.23)",
    // }
  },
}));

function Admin() {
  const classes = useStyles(); // useStyles(theme);
  const token = useStore((state) => state.token);
  const toast = useStore((state) => state.toast);
  const dispatch = useStore((state) => state.dispatch);
  const [form, setForm] = useState({
    name: '',
    cuddly: 1,
    lazy: 1,
    hungry: 1,
    playful: 1,
    loyal: 1,
  });
  const handleSubmitCat = (event) => {
    event.preventDefault();
    createPet(
      token,
      form.name,
      document.getElementById('contained-button-file').files[0],
      form.cuddly,
      form.lazy,
      form.hungry,
      form.playful,
      form.loyal,
      ).then((response) => {
        if (response.error) {
          dispatch({ type: actions.TOAST, payload: {
            text: response.error,
            color: 'red',
          }});
        }
        else {
          dispatch({ type: actions.TOAST, payload: {
            text: response.message,
            color: 'green',
          }});
          console.log(response);
        }
      });
  };
  const handleFormChange = (event) => {
    setForm((prev) => {
      let next = { ...prev };
      next[event.target.name] = event.target.value;
      return next;
    })
  };
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
        <CardContent>
          <Typography
            className={classes.headers}
            component="h2"
            variant="h4"
          >
            Create a Cat
          </Typography>
          <form onSubmit={handleSubmitCat}>
            <label htmlFor="file-input-1">
              <Fab component="span">
                <AddPhotoAlternate />
              </Fab>
            </label>
            <input
              accept="image/png image/jpeg"
              id="file-input-1"
              className={classes.fileInput}
              type="file"
              name="photoInput"
              required
            />
            <TextField
              variant="outlined"
              className={classes.textInput}
              margin="normal"
              fullWidth
              label="Cat Name"
              name="name"
              autoFocus
              onChange={handleFormChange}
              value={form.name}
            />
            <div>
            <TextField
              variant="outlined"
              className={classes.textInput}
              margin="normal"
              label="Cuddly (1-3)"
              name="cuddly"
              autoFocus
              onChange={handleFormChange}
              value={form.cuddly}
            />
            <TextField
              variant="outlined"
              className={classes.textInput}
              margin="normal"
              label="Lazy (1-3)"
              name="lazy"
              onChange={handleFormChange}
              value={form.lazy}
            />
            <TextField
              variant="outlined"
              className={classes.textInput}
              margin="normal"
              label="Hungry (1-3)"
              name="hungry"
              onChange={handleFormChange}
              value={form.hungry}
            />
            <TextField
              variant="outlined"
              className={classes.textInput}
              margin="normal"
              label="Playful (1-3)"
              name="playful"
              onChange={handleFormChange}
              value={form.playful}
            />
            <TextField
              variant="outlined"
              className={classes.textInput}
              margin="normal"
              label="Loyal (1+)"
              name="loyal"
              onChange={handleFormChange}
              value={form.loyal}
            />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Grid>
    </Grid>
  );
}
export default Admin;
