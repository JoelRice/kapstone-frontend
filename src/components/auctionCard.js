import {
  Container,
  Typography,
  Input,
  Card,
  CardContent,
  Button,
  useStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStore, actions } from "../store/store";
import {
  getAccountInfo,
  checkAuctions,
  bidOnAuction,
} from "../apis/fetchRequests";
import KittyCard from "../components/kittyCard";

const timeUntil = (dateStr) => {
  if (!dateStr) return;
  const dateObj = new Date(dateStr);
  const msDiff = dateObj.getTime() - new Date().getTime();
  if (msDiff <= 0) return "now";
  const hrs = Math.floor(msDiff / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const min = (Math.floor(msDiff / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const sec = (Math.floor(msDiff / 1000) % 60).toString().padStart(2, "0");
  return `in ${hrs}:${min}:${sec}`;
};

function AuctionCard(props) {
  const [auctionDetails, setAuctionDetails] = useState({});
  const [userId, setUserId] = useState("");

  const highestBid =
    auctionDetails?.bids?.reduce(
      (highest, bid) => Math.max(highest, bid.amount),
      0
    ) || 0;
  const currentBid =
    auctionDetails?.bids?.reduce(
      (highest, bid) =>
        bid.user === userId ? Math.max(highest, bid.amount) : highest,
      0
    ) || 0;
  const [bid, setBid] = useState(currentBid);
  const [timeLeft, setTimeLeft] = useState();
  const token = useStore((state) => state.token);
  const dispatch = useStore((state) => state.dispatch);
  const { auctionId } = props;

  const refreshAuction = () => {
    checkAuctions(auctionId).then((res) => {
      if (res.error) {
        console.log(res);
      } else {
        setAuctionDetails(res);
        setBid(
          res?.bids?.reduce(
            (highest, bid) =>
              bid.user === userId ? Math.max(highest, bid.amount) : highest,
            0
          ) || 0
        );
      }
    });
  };

  const updateBid = (event) => {
    setBid(Number(event.target.value));
  };

  const submitBid = () => {
    if (bid > highestBid && bid > currentBid) {
      bidOnAuction(token, bid, auctionId)
        .then((res) => {
          if (res.error) {
            dispatch({
              type: actions.TOAST,
              payload: { text: res.error, color: "#EF3823" },
            });
          } else {
            dispatch({
              type: actions.TOAST,
              payload: { text: res.message, color: "#4BCC63" },
            });
          }
        })
        .then(() => {
          refreshAuction();
        });
    } else {
      dispatch({
        type: actions.TOAST,
        payload: { text: "Bid Higher!", color: "#75a8d8" },
      });
    }
  };

  useEffect(refreshAuction, [auctionId, userId, setAuctionDetails]);

  useEffect(() => {
    getAccountInfo(token).then((account) => {
      setUserId(account.userId);
    });
  }, [setUserId, token]);

  useEffect(() => {
    let interval = setInterval(
      () => setTimeLeft(timeUntil(auctionDetails.endsAt)),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [setTimeLeft, auctionDetails]);

  return (
    <Container>
      <div>
        <CardContent>
          <KittyCard petId={auctionDetails.pet} />
          <Card
            variant="outlined"
            style={{
              flexFlow: "row nowrap",
              maxWidth: "315px",
              maxHeight: "200px",
              marginTop: "3px",
              padding: "5px",
            }}
          >
            <Typography>
              <Typography align="center">Bid to Beat: {highestBid}</Typography>

              <Typography align="center">Your Current Bid:</Typography>

              <Typography align="center">
                <Input value={bid} onChange={updateBid} type="number" />
              </Typography>

              <Typography align="center">Auction ends {timeLeft}</Typography>
              <br></br>
              <Typography align="center">
                <Button onClick={submitBid} variant="contained" color="primary">
                  Place Bid
                </Button>
              </Typography>
            </Typography>
          </Card>
        </CardContent>
      </div>
    </Container>
  );
}

export default AuctionCard;
