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
import UserCard from "../components/userCard";
import { getAllUserIds } from "../apis/fetchRequests";

function UsersPage(props) {
  const history = useHistory();
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    getAllUserIds().then((res) => {
      if (res.error) {
        console.log(res);
      }
      else {
        setUsersList(res);
      }
    });
  }, [setUsersList])
  return (
    <div>
      {usersList.map((userId) => (
        <UserCard id={userId} />
      ))}
    </div>
  );
}

export default UsersPage;
