import React, { useEffect, useState } from "react";
import { useStore } from "../store/store";
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardActions, 
  Button 
} from "@material-ui/core";
import { Switch, Route } from "react-router-dom";


export default function UserCard(props) {
  // const history = useHistory();
  // const dispatch = useStore((state) => state.dispatch);
  // const {userKitties, userItems, userBio, userWishList, match, history } = props
  // const { params } = match;
  // const { username } = params;

  useEffect (() => {
    return (
      console.log()
    )
  })

  return (
  <div className="users-page">
    <Container style={{ backgroundColor: "#cfe8fc",}}>
      <Typography>
        User's Profile
      </Typography>
      <Card>
        <CardActions>
          <Button>
            Request Trade
          </Button>
        </CardActions>
      </Card>
      <Grid container 
      direction="row"
      justify="center"
      alignItems="stretch"
      >
      <Grid item>
      <Typography>
        User's Kitties
      </Typography>
      </Grid>
      <Grid item>
      <Typography>
        User's Wishlist
      </Typography>
      </Grid>
      <Grid item>
      <Typography>
        User's Items
      </Typography>
      </Grid>
      </Grid>
    </Container>
  </div>
  );
}
