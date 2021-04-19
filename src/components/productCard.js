import React from 'react';
import {Card, CardActions, CardContent, Button, Typography, CardHeader, CardMedia} from "@material-ui/core";
//import classes from '*.module.css';



const ProductCard=(props)=>{
  const {title, happiness, imageURL} = props;
  return (
    <Card>

      <CardMedia  
      style={{height:"250px"}} 
      image={imageURL}/>
      <CardContent>
        <div>
        <Typography variant="h5" component="p">
        {title}
        </Typography>
        <Typography variant="h5" component="p">
        {happiness}
        </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing >
        <Button size="small">Happiness</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

/*export default function productCard(props) {
  return;
}*/

//cost is "happiness"