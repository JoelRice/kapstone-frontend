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

import { createPet } from '../apis/fetchRequests';
import { useStore, actions } from '../store/store';

import '../assets/styles/admin.css';

function Admin() {
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
    console.log(event);
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
    console.log(event);
    setForm((prev) => {
      let next = { ...prev };
      next[event.target.name] = event.target.value;
      return next;
    })
  };
  return (
    <Grid container component="main" justify="center">
      <Grid>
        <Typography className="headers" variant="h3">
            Admin Page
        </Typography>
        <CardContent>
          <Typography className="headers" variant="h3">
              Create a Cat
          </Typography>
          <form onSubmit={handleSubmitCat}>
            <label htmlFor="contained-button-file">
              <Fab component="span">
                <AddPhotoAlternate />
              </Fab>
            </label>
            <input
              accept="image/png image/jpeg"
              id="contained-button-file"
              type="file"
              name="photoInput"
              required
            />
            <TextField
              variant="outlined"
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
              margin="normal"
              label="Cuddly (1-3)"
              name="cuddly"
              autoFocus
              onChange={handleFormChange}
              value={form.cuddly}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Lazy (1-3)"
              name="lazy"
              onChange={handleFormChange}
              value={form.lazy}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Hungry (1-3)"
              name="hungry"
              onChange={handleFormChange}
              value={form.hungry}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Playful (1-3)"
              name="playful"
              onChange={handleFormChange}
              value={form.playful}
            />
            <TextField
              variant="outlined"
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
