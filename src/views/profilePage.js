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
import { useStore } from "../store/store";
import UserCard from "../components/userCard";
import { getAccountInfo } from "../apis/fetchRequests";

function ProfilePage(props) {
  const [userDetails, setUserDetails] = useState({});
  const token = useStore((state) => state.token);
  useEffect(() => {
    getAccountInfo(token).then((res) => {
      if (res.error) {
        console.log(res);
      }
      else {
        setUserDetails(res);
      }
    });
  }, [token, setUserDetails])
  return (
    <div>
      I work
    </div>
  );
}

export default ProfilePage;
