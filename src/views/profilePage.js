import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../store/store";
import UserCard from "../components/userCard";
import { getAccountInfo } from "../apis/fetchRequests";
import KittyCard from "../components/kittyCard";

function ProfilePage(props) {
  const [userDetails, setUserDetails] = useState({});
  const token = useStore((state) => state.token);

  useEffect(() => {
    getAccountInfo(token).then((res) => {
      if (res.error) {
        console.log(res);
      } else {
        setUserDetails(res);
      }
    });
  }, [token, setUserDetails]);
  return (
    <div className="profile-page">
      <Typography component="h2" variant="h2" align="center">
        {userDetails.username || "?"}'s Inventory
      </Typography>
      <Container style={{ backgroundColor: "#cfe8fc" }}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item>
            <Typography>Balance: {userDetails.balance || "0"}</Typography>
          </Grid>
          <Grid item>
            <Typography>Kitties:</Typography>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
              spacing={11}
            >
              {userDetails.pets?.map((petId) => (
                // Should be a PetCard
                <KittyCard key={petId} petId={petId} />
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Typography>Items:</Typography>
            <Grid>
              {userDetails.inventory?.map((productName, i) => (
                // Should be a ProductCard
                <div key={i}>
                  {productName
                    .split("-")
                    .map((s) => s[0].toUpperCase() + s.slice(1))
                    .join(" ")}
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProfilePage;