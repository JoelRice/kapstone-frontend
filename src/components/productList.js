import React from "react";
import ProductCard from "../components/productCard";
import {Grid, Container} from "@material-ui/core";
import ShopContent from "../components/shopContent"
/*export default function productList(props) {
  return;
}*/


const ProductList=()=>{

  const shopContentList=(shopContentListObj) => {
    return (
      <ProductCard {...shopContentListObj}/>
    )
  }
  return (
    <div>
      <Container id="items" style={{flex:"row"}}>
    <Grid container spacing={4}> 
      <Grid item xs={12} sm={6} md={4}>
        {ShopContent.map(shopContentListObj=> ProductCard(shopContentListObj))}
      </Grid>
    </Grid>
    </Container>
    </div>
  );
}
export default ProductList
//container for shop