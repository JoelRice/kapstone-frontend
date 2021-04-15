import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from "../store/store";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {

  },
  button: {
    margin: 2,
  },
});




export default function KittyCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [auctionTimer, setAuctionTimer] = useState(0);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBidding = () => {
    setExpanded(!expanded);
  };

  
  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.image}>
            Here will go the image of the kitty 
        </div>
        <Typography variant="h5" component="h2">
          Here will go the Kitty name 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Here will go the kitty breed
        </Typography>
        <Typography variant="body2" component="p">
          <Button 
            className={classes.button}
            variant="contained"
            color="primary"
            onChange={handleBidding}
            >
              Bid Now
          </Button>
          <div className="auctionTimer">
            Time Left {auctionTimer}
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="kittyStats">
          <Typography paragraph>Stats:</Typography>
          <Typography paragraph>
            -produces blank coins 
            -needs blank amount of food
            -favorite items (these will be things that can be purchased in the store)
          </Typography>
          <Typography paragraph>
            Small story that effects nothing in the game
          </Typography>
          <Typography>
            Current Bid/Auction start time/time remaining 
          </Typography>
        </CardContent>
      </Collapse>
  </Card>
  )
}
