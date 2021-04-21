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
import { useHistory } from "react-router-dom";
import { checkUser } from "../apis/fetchRequests";

export default function UserCard(props) {
  const history = useHistory();
  const { id } = props;
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    checkUser(id).then((res) => {
      setUserInfo(res);
    });
  }, [setUserInfo, id]);

  return (
    <div className="users-page">
      <Container style={{ backgroundColor: "#cfe8fc" }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography>{userInfo.username || '?'}</Typography>
          </Grid>
          <Grid item>
            <Typography>Balance: {userInfo.balance || '0'}</Typography>
          </Grid>
          <Grid item>
            {/* Could be replaced with a kitty card for each one */}
            <Typography>Kitties: {userInfo.pets?.length || '0'}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
