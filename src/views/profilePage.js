import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStore } from "../store/store";
import { getAccountInfo } from "../apis/fetchRequests";
import KittyCard from "../components/kittyCard";
import ProductCard from "../components/productCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: "80vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#cfe8fc",
    color: theme.palette.info.main,
  },
  container2: { backgroundColor: "#cfe8fc", width: "80vw" },
  heading1: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    color: theme.palette.info.main,
  },
}));

function ProfilePage(props) {
  const classes = useStyles();
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
      <Container style={{ backgroundColor: "#cfe8fc" }}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          className={classes.heading1}
        >
          {userDetails.username || "?"}'s Inventory
        </Typography>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item>
            <br></br>
            <Typography component="h4" variant="h4">Balance: {userDetails.balance || "0"}</Typography>
          </Grid>
          <Grid item>
            <Typography component="h4" variant="h4">Kitties: {userDetails.pets?.length > 0 ? "" : "None, adopt some!"}</Typography>
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
            <Typography component="h4" variant="h4">Items: {userDetails.inventory?.length > 0 ? "" : "None, buy some!"}</Typography>
            <Grid container direction="row">
              {userDetails.inventory?.map((productName, i) => (
                <ProductCard canBePurchased={false} key={i} productName={productName} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProfilePage;
