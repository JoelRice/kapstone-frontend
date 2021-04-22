import {
  Box,
  Container,
  Button,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAllAuctionIds } from "../apis/fetchRequests";
import { makeStyles } from "@material-ui/core/styles";
import AuctionCard from "../components/auctionCard";

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

  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3">
        Welcome to the Adoption Center
      </Typography>
      <Container className={classes.container} component="main">
        <Grid container>
          <Typography component="h2" variant="h4">
            Adoptable Kitties
          </Typography>
          { 
            auctions.map((auction) => (
              <Grid item><AuctionCard key={auction} id={auction} /></Grid>
            ))
          }
        </Grid>
      </Container>
    </div>
  );
}

export default AdoptionsPage;
