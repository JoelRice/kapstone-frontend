import React from "react";
import { useState } from "react";

import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Link,
} from "@material-ui/core";
import { Tabs, Tab, Box } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { logoutRequest } from "../apis/fetchRequests";
import { Route, Switch } from "react-router";
import SignUpPage from "./signup";
import LoginPage from "./login";
import Admin from "./admin";
import { BrowserRouter, useHistory } from "react-router-dom";
import { useStore, actions } from "../store/store";
import DeleteAccount from "./delete";
//styling for this header is below
//
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
}));

export default function MenuHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useStore((state) => state.dispatch);
  const token = useStore((state) => state.token);
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const indexToTabName = {
    0: "adoption",
    1: "shop",
    2: "signup",
    3: "login",
    4: "users",
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);
  const [selectedPage, setSelectedPage] = useState(page);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    const linkPath = indexToTabName[newValue];
    history.push(linkPath);
    setSelectedTab(newValue);
  };

  const classes = useStyles();

  //TODO: Get Toast response
  //to work for Logout successful
  const handleLogout = (event) => {
    event.preventDefault();
    logoutRequest(token).then((res) => {
      if (res.error) {
        dispatch({ type: actions.LOGOUT });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.error, color: "#EF3823" },
        });
      } else {
        history.push("/login");
        dispatch({ type: "LOGOUT" });
        dispatch({
          type: actions.TOAST,
          payload: { text: res.message, color: "#4BCC63" },
        });
      }
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="website-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onChange={handleClick}
          >
            <MenuItem onClick={(event) => {
                history.push("/profile");
                setSelectedTab(null)
                handleClose();
                  }}>Profile</MenuItem>
            <MenuItem onClick={(event) => {
                setSelectedTab(null)
                history.push("/traderequests");
                handleClose();
                  }}>Trade Requests</MenuItem>
            <MenuItem onClick={(event) => {
              setSelectedTab(null)
              history.push("/profile/inventory");
              handleClose();
                }}>My Inventory</MenuItem>
            <MenuItem onClick={(event) => {
              setSelectedTab(null)
              history.push("/settings");
              handleClose();
                }}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem onClick={(event) => {
                setSelectedTab(null)
                history.push("/delete");
                handleClose();
                  }}>Delete Account</MenuItem>
          </Menu>

          <Typography className={classes.title} variant="h6" noWrap>
            KittyBay
          </Typography>

          <div className="navigation">
            <Tabs
              variant="fullWidth"
              value={selectedTab}
              onChange={handleChange}
            >
              <Tab label="Adoptions" component={Link} />
              <Tab label="Shop Items" component={Link} />
              <Tab label="Sign Up" component={Link} />
              <Tab label="Login" component={Link} />
              <Tab label="Users" component={Link} />
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
