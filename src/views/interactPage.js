import {
  Container,
  Button,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useStore, actions } from "../store/store";
import { getAccountInfo, checkPet, interactWithPet } from "../apis/fetchRequests";
import { useHistory } from "react-router-dom";
import ProductCard from "../components/productCard";
import KittyCard from "../components/kittyCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  heading1: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(4),
    color: theme.palette.info.main,
  },
}));

export default function InteractPage() {
  const classes = useStyles();
  const history = useHistory();
  const token = useStore((state) => state.token);
  const dispatch = useStore((state) => state.dispatch);
  const productName = history.location.pathname.split("/").slice(-1)[0]; // /use/feather-wand --> feather-wand
  const [petList, setPetList] = useState([]);
  const [petDetails, setPetDetails] = useState({});
  const [petId, setPetId] = useState("");

  const handleInteract = (event) => {
    interactWithPet(token, petId, productName).then((res) => {
      if (res.error) {
        dispatch({ type: actions.TOAST, payload: {
          text: res.error,
          color: "red",
        }});
      }
      else {
        dispatch({ type: actions.TOAST, payload: {
          text: res.message,
          color: "green",
        }});
        history.push("/profile");
      }
    });
  };

  const handleChange = (event) => {
    setPetId(event.target.value);
  };

  useEffect(() => {
    getAccountInfo(token).then((res) => {
      if (res.error) {
        console.log(res);
      }
      else {
        setPetList(res.pets);
        setPetId(res.pets[0]);
      }
    });
  }, [setPetList, setPetId, token]);

  useEffect(() => {
    const tempDetails = {};
    petList.forEach((petId) => {
      checkPet(petId).then((res) => {
        if (res.error) console.log(res)
        else {
          tempDetails[petId] = res;
          if (Object.keys(tempDetails).length === petList.length) setPetDetails(tempDetails);
        }
      });
    });
  }, [petList, setPetDetails]);

  return (
    <div>
      <Container
        component="main"
        style={{ backgroundColor: "#cfe8fc", height: "500px", width: "500px" }}
      >
        <Typography
          className={classes.heading1}
          component="h1"
          variant="h2"
          align="center"
        >
          Interact with your Pets!
        </Typography>
        <ProductCard productName={productName} />
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel>Select a Pet</InputLabel>
          <Select
            value={petId}
            onChange={handleChange}
          >
          {
            petList.map((petId) => (
              <MenuItem key={petId} value={petId}>{petDetails[petId]?.name || "Loading..."}</MenuItem>
            ))
          }
          </Select>
        </FormControl>
        {petId ? <KittyCard petId={petId} />: ""}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleInteract}
        >
          Use Item
        </Button>
      </Container>
    </div>
  );
}
