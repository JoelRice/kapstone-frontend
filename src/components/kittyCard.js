import {
  makeStyles,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Grid,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { checkPet } from "../apis/fetchRequests";
const useStyles = makeStyles({
  root: {
    width: 315,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {},
  button: {
    margin: 2,
  },
});

export default function KittyCard(props) {
  const classes = useStyles();

  const [catInfo, setCatInfo] = useState({});
  const { petId } = props;
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (petId) {
      checkPet(petId).then((res) => {
        setCatInfo(res);
      });
    }
  }, [setCatInfo, petId]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" align="center">
          {catInfo.name || " No Name Available"}
        </Typography>

        <div className={classes.image}>
          { catInfo.pictureData ? <CardMedia component="img" style={{height:"250px"}} src={catInfo.pictureData}/> : ""}
        </div>
      </CardContent>

      <CardContent>
        <Typography variant="h5" component="h2" align="center">
          Cat Info
        </Typography>
        <ExpandMoreIcon onClick={handleExpandClick} />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="h5" component="h2" align="center">
            Traits:
          </Typography>
          <Typography
            className={classes.pos}
            color="textPrimary"
            align="center"
          >
            <div>Cuddly: {catInfo.traits?.cuddly}</div>
            <div>Lazy: {catInfo.traits?.lazy}</div>
            <div>Hungry: {catInfo.traits?.hungry}</div>
            <div>Tired: {catInfo.traits?.tired}</div>
            <div>Loyal: {catInfo.traits?.loyal}</div>
          </Typography>

          <Typography variant="h5" component="h2" align="center">
            Stats:
          </Typography>

          <Typography
            className={classes.pos}
            color="textPrimary"
            align="center"
          >
            <div>Tired: {catInfo.stats?.tired}</div>
            <div>Trusting: {catInfo.stats?.trusting}</div>
          </Typography>
        </Collapse>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
