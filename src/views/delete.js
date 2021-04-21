import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStore, actions } from "../store/store";
import { deleteAccount } from "../apis/fetchRequests";
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
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(4),
    color: theme.palette.info.main,
  },
}));

export default function DeleteAccount() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useStore((state) => state.dispatch);
  const token = useStore((state) => state.token);
  const [form, setForm] = useState({ password: "" });

  const handleDelete = (event) => {
    const password = event.currentTarget.password.value;
    event.preventDefault();
    deleteAccount(token, password).then((res) => {
      if (res.error) {
        history.push("/delete");
        setForm({ password: "" });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.error, color: "#EF3823" },
        });
      } else {
        history.push("/signup");
        dispatch({
          type: actions.LOGOUT,
        });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.message, color: "#4BCC63" },
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
          Delete Account
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleDelete}>
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
            Delete Account
          </Button>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
