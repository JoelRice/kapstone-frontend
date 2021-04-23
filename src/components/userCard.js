import { Container, Typography, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { checkUser } from "../apis/fetchRequests";

export default function UserCard(props) {
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
        <Grid container direction="row" justify="space-evenly" spacing={2}>
          <Grid item alignItems="center" xs={3}>
            <Typography>{userInfo.username || "?"}</Typography>
          </Grid>
          <Grid item alignItems="center" xs={3}>
            <Typography>Balance: {userInfo.balance || "0"}</Typography>
          </Grid>
          <Grid item alignItems="center" xs={3}>
            <Typography>Kitties: {userInfo.pets?.length || "0"}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
