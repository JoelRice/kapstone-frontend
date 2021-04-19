import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardActions,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStore } from "../store/store";
import { Switch, Route } from "react-router-dom";
import { checkUser } from "../apis/fetchRequests";
// Note: userCard is displaying the users current (inventory) kitties, items, and wishlist
export default function UserCard(props) {
  // const history = useHistory();
  // const dispatch = useStore((state) => state.dispatch);

  const {
    userKitties,
    userItems,
    userBio,
    userWishList,
    match,
    history,
  } = props;
  const { params } = match;
  const { username } = params;

  const handleCheckUser = (event) => {
    checkUser();
    console.log(checkUser());
  };

  // {"User"} will = current users name
  return (
    <div className="users-page">
      <Container style={{ backgroundColor: "#cfe8fc" }}>
        <Typography align="center"> {"User"}'s Profile</Typography>

        <Card></Card>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography>{"User"}'s Kitties</Typography>
          </Grid>
          <Grid item>
            <Typography>{"User"}'s Wishlist</Typography>
          </Grid>
          <Grid item>
            <Typography>{"User"}'s Items</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
