import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Input,
  TextField,
  Typography,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { updateAccountInfo } from "../apis/fetchRequests";
import { useStore, actions } from "../store/store";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  heading1: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(4),
    color: "primary",
    align: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Settings(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useStore((state) => state.dispatch);
  const token = useStore((state) => state.token);

  const [form, setForm] = useState({
    password: "",
    newPassword: "",
    newUsername: "",
  });
  const handleUpdateAccount = (event) => {
    event.preventDefault();

    updateAccountInfo(
      token,
      form.password,
      form.newUsername,
      form.newPassword
    ).then((res) => {
      if (res.error) {
        setForm({
          password: "",
          newPassword: "",
          newUsername: "",
        });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.error, color: "#EF3823" },
        });
      } else {
        //   still need return for successful res
        history.push("/profile");
        dispatch({
          type: actions.TOAST,
          payload: { text: res.message, color: "#4BCC63" },
        });
      }
    });
  };
  const handleFormChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <Container
      component="main"
      maxWidth="lg"
      align="center"
      style={{ backgroundColor: "#cfe8fc", height: "1000px", width: "900px" }}
    >
      <CssBaseline />
      <header className="header">
        <Typography className={classes.heading1} component="h1" variant="h2">
          Settings
        </Typography>
      </header>
      <Grid container component="main" className={classes.root}>
        <form className="form" onSubmit={handleUpdateAccount}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Update Username"
            value={form.username}
            onChange={handleFormChange}
            name="newUsername"
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            label="Current Password"
            value={form.password}
            name="password"
            onChange={handleFormChange}
            autoCapitalize="none"
            type="password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="New Password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleFormChange}
            autoCapitalize="none"
            type="password"
          />
          <Button
            type="submit"
            size="lg"
            variant="contained"
            color="primary"
            className="submit"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Container>
  );
}
