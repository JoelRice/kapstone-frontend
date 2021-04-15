import { Container, Typography, Grid, Box, Card, CardActions, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import UserCard from "../components/userCard";

function Users(props) {
  return (
  <UserCard/>
  );
};

export default Users;
