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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {

  },
});




export default function KittyCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
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
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
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
