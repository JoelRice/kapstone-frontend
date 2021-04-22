import {
  Container,
  Button,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { useStore, actions } from "../store/store";
import { useHistory } from "react-router-dom";
import KittyCard from "../components/kittyCard";


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#cfe8fc",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
}));

function AdoptionsPage(props) {
  const classes = useStyles();


  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    getAllAuctionIds().then((res) => {
      if (res.error) {
        console.log(res);
      }
      else {
        setAuctions(res);
      }
    });
  }, [setAuctions]);


  const [userDetails, setUserDetails] = useState({});
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3">
        Welcome to the Adoption Center
      </Typography>
      <Container className={classes.container} component="main">
        <Grid container>
          <Typography component="h2" variant="h4">
            Available for adoption
          </Typography>

          {userDetails.pets?.map((petId) => (
            // Should be a PetCard
            <KittyCard key={petId} petId={petId} />
          ))}
          {/* Just testing for now this will change */}
        </Grid>

        <Grid container>
          <Typography component="h2" variant="h4">
            Recently Adopted
          </Typography>
          <Grid item></Grid>

          
        </Grid>
      </Container>
    </div>
  );
}

export default AdoptionsPage;
