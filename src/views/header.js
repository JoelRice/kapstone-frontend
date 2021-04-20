import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { logoutRequest } from "../apis/fetchRequests";

import { useStore, actions } from "../store/store";
import "../assets/styles/header.css";

//styling for this header is below
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
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#eeeeff',
    },
  }
}));

const PAGE_INDEXES = [
  "/adoption",
  "/shop",
  "/signup",
  "/login",
  "/users",
];

export default function MenuHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useStore((state) => state.dispatch);
  const token = useStore((state) => state.token);
  //TODO: history will not work, we are using useHistory now
  const { match, history } = props;

  const [selectedTab, setSelectedTab] = useState(() => {
    const start = PAGE_INDEXES.indexOf(history.location.pathname);
    return (start >= 0) ? start : false;
  });
  // const [selectedPage, setSelectedPage] = useState(page);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setTab = (event, newIndex) => {
    setSelectedTab(newIndex);
  };

  useEffect(() => {
    history.push(PAGE_INDEXES[selectedTab]);
  }, [history, selectedTab]);

  const classes = useStyles();

  const handleLogout = (event) => {
    event.preventDefault();
    logoutRequest(token).then((res) => {
      if (res.error) {
        history.goBack();
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
            <MenuItem
              onClick={(event) => {
                history.push("/profile");
                setSelectedTab(false);
                handleClose();
              }}
            >
              Profile
            </MenuItem>

            <MenuItem
              onClick={(event) => {
                setSelectedTab(false);
                history.push("/settings");
                handleClose();
              }}
            >
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem
              onClick={(event) => {
                setSelectedTab(false);
                history.push("/delete");
                handleClose();
              }}
            >
              Delete Account
            </MenuItem>
          </Menu>

          <Typography className={classes.title} variant="h6" noWrap>
            KittyBay
          </Typography>

          <div className="navigation">
            <Tabs
              variant="fullWidth"
              value={selectedTab}
              className={classes.tabs}
              indicatorColor="secondary"
              onChange={setTab}
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
