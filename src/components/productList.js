import React from "react";
import ProductCard from "../components/productCard";
import {Grid, Container} from "@material-ui/core";
import ShopContent from "../components/shopContent"
//import {useState, useEffect} from "react";

/*export default function productList(props) {
  return;
}*/


const ProductList=()=>{

  //const [products, setProducts] =useState([]);
  //const [inventory, setInventory] = useState({});

  const shopContentList=(shopContentListObj) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <ProductCard {...shopContentListObj}/>
      </Grid>
    )
  }
  return (

    
    <Grid container spacing={2}> 
        {ShopContent.map(shopContentListObj=> ProductCard(shopContentListObj))}
      </Grid>

  );
}
export default ProductList
//container for shop