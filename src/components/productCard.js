import React, { useState, useEffect } from 'react';
import { getProductDetailsByName, purchaseProductByName } from "../apis/fetchRequests";
import { useStore, actions } from "../store/store";
import {Grid, Card, CardActions, CardContent, Button, Typography, CardHeader, CardMedia} from "@material-ui/core";
//import classes from '*.module.css';
const ProductCard=(props)=>{
  const { productName } = props;
  const productDisplayName = productName.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ');
  const [productDetails, setProductDetails] = useState({});
  const productDisplayCategory = productDetails.category ? productDetails.category[0].toUpperCase() + productDetails.category.slice(1) : '';
  const token = useStore((state) => state.token);
  const dispatch = useStore((state) => state.dispatch);

  useEffect(() => {
    getProductDetailsByName(productName).then((res) => {
      if (res.error) {
        console.log(res);
      }
      else {
        setProductDetails(res);
      }
    });
  }, [setProductDetails, productName]);

  const handlePurchase = (event) => {
    purchaseProductByName(token, 1, productName).then((res) => {
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
      }
    });
  };

  return (
    <Grid>
    <Card >
      <CardHeader>
        {productDisplayCategory}
      </CardHeader>
      { productDetails.pictureData ? <CardMedia component="img" style={{height:"250px"}} src={productDetails.pictureData}/> : ""}
      <CardContent>
        <div>
        <Typography variant="h5" component="p">
        {productDisplayName}
        </Typography>
        <Typography variant="h5" component="p">
        Price: {productDetails.price}
        </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing >
        <Button size="small" onClick={handlePurchase}>Purchase</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
export default ProductCard;