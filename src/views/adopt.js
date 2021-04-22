import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAllAuctionIds } from "../apis/fetchRequests";
import { makeStyles } from "@material-ui/core/styles";
import AuctionCard from "../components/auctionCard";

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

function AdoptionsPage(props) {
  const classes = useStyles();
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    getAllAuctionIds().then((res) => {
      if (res.error) {
        console.log(res);
      } else {
        setAuctions(res);
      }
    });
  }, [setAuctions]);

  return (
    <div className={classes.root}>
      <Container className={classes.container2}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          className={classes.heading1}
        >
          Welcome to the Adoption Center
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          className={classes.heading1}
        >
          Adoptable Kitties
        </Typography>
      </Container>

      <Container className={classes.container} component="main">
        <Grid container direction="row">
          {auctions.map((auction) => (
            <Grid key={auction} item>
              <AuctionCard auctionId={auction} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AdoptionsPage;
