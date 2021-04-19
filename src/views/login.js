import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStore, actions } from "../store/store";
import { loginRequest } from "../apis/fetchRequests";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(4),
    color: theme.palette.info.main,
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useStore((state) => state.dispatch);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    loginRequest(username, password).then((res) => {
      if (res.error) {
        history.push("/login");
        setForm({ username: "", password: "" });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.error, color: "#EF3823" },
        });
      } else {
        history.push("/");
        dispatch({
          type: actions.TOAST,
          payload: { text: res.message, color: "#4BCC63" },
        });
        dispatch({
          type: actions.LOGIN,
          payload: res.token,
        });
      }
    });
  };

  const handleChange = (event) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  return (
    <div>
      <Container
        component="main"
        style={{ backgroundColor: "#cfe8fc", height: "500px", width: "500px" }}
      >
        <Typography className={classes.heading1} component="h1" variant="h2">
          Log In
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={form.username}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, username: event.target.value }))
            }
          />

          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onChange={handleChange}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.form} component="h1">
                Don't have an account yet?
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
