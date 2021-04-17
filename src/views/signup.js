import {
  Box,
  Container,
  Button,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { createAccount } from "../apis/fetchRequests";
import { useStore, actions } from "../store/store";
import { Routes } from "../App";
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
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useStore((state) => state.dispatch);

  const handleSignUp = (event) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    // TODO: Providing an invalid/taken username or invalid password on the signup page redirects you to the login page
    createAccount(username, password)
      .then((res) => {
        if (res.error) {
          history.block(createAccount);
          setForm({ username: "", password: "" });
          dispatch({
            type: actions.TOAST,
            payload: { text: res.error, color: "#EF3823" },
          });
        } else {
          dispatch({
            type: actions.TOAST,
            payload: { text: res.message, color: "#4BCC63" },
          });
          dispatch({ type: actions.LOGIN, payload: res.token });
        }
      })
      .then(history.push("/login"));
  };
  const handleChange = (event) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
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
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
                // TODO: Confirm password on signup page does not actually require the 'confirm' box to match the first

                onChange={(event) =>
                  setForm((prev) => ({ ...prev, password: event.target.value }))
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
          <Grid container justify="flex-end">
            <Grid item>
              {/* TODO: Clicking "Already have an account? Log In" on login page 404s on deployment. It probably needs to useHistory. */}
              {/* <Link href="login" variant="body2">
                Already have an account? Log In
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
