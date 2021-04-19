import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { createAccount } from "../apis/fetchRequests";
import { useStore, actions } from "../store/store";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  heading1: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    color: theme.palette.info.main,
  },
}));

export default function SignUpPage() {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useStore((state) => state.dispatch);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      dispatch({
        type: actions.TOAST,
        payload: { text: "Passwords don't match", color: "#EF3823" },
      });

      return;
    }
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    createAccount(username, password).then((res) => {
      if (res.error) {
        history.push("/signup");
        setForm({ username: "", password: "", checkPassword: "" });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.error, color: "#EF3823" },
        });
      } else {
        history.push("/login");
        dispatch({
          type: actions.TOAST,
          payload: { text: res.message, color: "#4BCC63" },
        });
        dispatch({ type: actions.LOGIN, payload: res.token });
      }
    });
  };

  const handleChange = (event) => {
    setForm((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ backgroundColor: "#cfe8fc", height: "500px", width: "500px" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.heading1} component="h1" variant="h2">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                value={form.username}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, username: event.target.value }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, password: event.target.value }))
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                value={form.confirmPassword}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    confirmPassword: event.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onChange={handleChange}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.form} component="h1">
                Already have an account?
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Log in
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
