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
import { useStore, actions } from "../store/store";
import { getAccountInfo, checkAuctions, bidOnAuction } from "../apis/fetchRequests";
import KittyCard from "../components/kittyCard";

const timeUntil = (dateStr) => {
  if (!dateStr) return;
  const dateObj = new Date(dateStr);
  const msDiff = dateObj.getTime() - (new Date().getTime());
  if (msDiff <= 0) return 'now';
  const hrs = Math.floor(msDiff / (1000 * 60 * 60))
    .toString().padStart(2, '0');
  const min = (Math.floor(msDiff / (1000 * 60)) % 60)
    .toString().padStart(2, '0');
  const sec = (Math.floor(msDiff / 1000) % 60)
    .toString().padStart(2, '0');
  return `in ${hrs}:${min}:${sec}`;
};

function AuctionCard(props) {
  const [auctionDetails, setAuctionDetails] = useState({});
  const [userId, setUserId] = useState('')
  const highestBid = auctionDetails?.bids?.reduce((highest, bid) => Math.max(highest, bid.amount), 0) || 0;
  const currentBid = auctionDetails?.bids?.reduce((highest, bid) => (bid.user === userId) ? Math.max(highest, bid.amount) : highest, 0) || 0;
  const [bid, setBid] = useState(currentBid);
  const [timeLeft, setTimeLeft] = useState();
  const token = useStore((state) => state.token);
  const dispatch = useStore((state) => state.dispatch);
  const { auctionId } = props;

  const refreshAuction = () => {
    checkAuctions(auctionId).then((res) => {
      if (res.error) {
        console.log(res);
      }
      else {
        setAuctionDetails(res);
        setBid(res?.bids?.reduce((highest, bid) => (bid.user === userId) ? Math.max(highest, bid.amount) : highest, 0) || 0);
      }
    });
  };

  const updateBid = (event) => {
    setBid(Number(event.target.value));
  };

  const submitBid = () => {
    if (bid > highestBid && bid > currentBid) {
      bidOnAuction(token, bid, auctionId).then((res) => {
        if (res.error) {
          dispatch({ type: actions.TOAST, payload: { text: res.error, color: 'red' } });
        }
        else {
          dispatch({ type: actions.TOAST, payload: { text: res.message, color: 'green' } });
        }
      }).then(() => {
        refreshAuction();
      });
    }
    else {
      dispatch({ type: actions.TOAST, payload: { text: 'Bid Higher!', color: 'white' } });
    }
  };

  useEffect(refreshAuction, [auctionId, userId, setAuctionDetails]);

  useEffect(() => {
    getAccountInfo(token).then((account) => {
      setUserId(account.userId);
    });
  }, [setUserId, token]);

  useEffect(() => {
    let interval = setInterval(() => setTimeLeft(timeUntil(auctionDetails.endsAt)), 1000);
    return () => {
      clearInterval(interval);
    }
  }, [setTimeLeft, auctionDetails])

  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", alignItems: "center"}}>
      <KittyCard petId={auctionDetails.pet} />
      <div>
        <div>Bid to Beat: {highestBid}</div>
        <div>
          <label>Your Current Bid:</label>
          <input value={bid} onChange={updateBid} type="number"/>
          <button onClick={submitBid}>Place Bid</button>
        </div>
        <div>Auction ends {timeLeft}</div>
      </div>
    </div>
  );
}

export default AuctionCard;
