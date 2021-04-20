import React, { useState } from "react";

import { AddPhotoAlternate } from "@material-ui/icons";

import {
  Button,
  Fab,
  Typography,
  TextField,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { createPet } from '../apis/fetchRequests';
import { useStore, actions } from '../store/store';

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
  },
}));

function NewPetForm() {
  const classes = useStyles();
  const token = useStore((state) => state.token);
  const dispatch = useStore((state) => state.dispatch);
  const [form, setForm] = useState({
    name: '',
    cuddly: '',
    lazy: '',
    hungry: '',
    playful: '',
    loyal: '',
  });
  const handleSubmitCat = (event) => {
    event.preventDefault();
    createPet(
      token,
      form.name,
      document.getElementById('file-input-newpet').files[0],
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
    <CardContent>
      <Typography
        className={classes.headers}
        component="h2"
        variant="h4"
      >
      Create a Cat
    </Typography>

    <form onSubmit={handleSubmitCat}>
      <label htmlFor="file-input-newpet">
        <Fab component="span">
          <AddPhotoAlternate />
        </Fab>
      </label>
      <input
        accept="image/png image/jpeg"
        id="file-input-newpet"
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
        onChange={handleFormChange}
        value={form.name}
      />
      <div>
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        label="Cuddly (1-5)"
        name="cuddly"
        onChange={handleFormChange}
        value={form.cuddly}
      />
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        label="Lazy (1-5)"
        name="lazy"
        onChange={handleFormChange}
        value={form.lazy}
      />
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        label="Hungry (1-5)"
        name="hungry"
        onChange={handleFormChange}
        value={form.hungry}
      />
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        label="Playful (1-5)"
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
  );
}
export default NewPetForm;
