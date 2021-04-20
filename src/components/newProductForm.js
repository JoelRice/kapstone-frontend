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

import { createProduct } from '../apis/fetchRequests';
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
    quality: '',
    price: '',
    category: '',
  });
  const handleSubmitCat = (event) => {
    event.preventDefault();
    createProduct(
      token,
      form.name.replaceAll(' ','-').toLowerCase(),
      document.getElementById('file-input-newproduct').files[0],
      form.quality,
      form.category,
      form.price,
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
      Create a Product
    </Typography>

    <form onSubmit={handleSubmitCat}>
      <label htmlFor="file-input-newproduct">
        <Fab component="span">
          <AddPhotoAlternate />
        </Fab>
      </label>
      <input
        accept="image/png image/jpeg"
        id="file-input-newproduct"
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
        label="Product Name"
        name="name"
        onChange={handleFormChange}
        value={form.name}
      />
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        fullWidth
        label="Category (petting, playing, resting, eating)"
        name="category"
        onChange={handleFormChange}
        value={form.category}
      />
      <div>
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        label="Quality (1-3)"
        name="quality"
        onChange={handleFormChange}
        value={form.quality}
      />
      <TextField
        variant="outlined"
        className={classes.textInput}
        margin="normal"
        label="Price (1+)"
        name="price"
        onChange={handleFormChange}
        value={form.price}
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
