import React from 'react';
import {Card, CardActions, CardContent, Button, Typography, CardHeader, CardMedia} from "@material-ui/core";



const ProductCard=props=>{
  const {title, happiness, description, imageURL} = props;
  return (
    <Card >
      <CardHeader>
        {happiness}
      </CardHeader>
      <CardMedia style={{height:"100px"}} image={imageURL}/>
      <CardContent>
        <Typography variant="body2" component="p">
        {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard

/*export default function productCard(props) {
  return;
}*/

//cost is "happiness"