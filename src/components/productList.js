import React from "react";
import ProductCard from "../components/productCard";
import {Grid, Container} from "@material-ui/core";

const ProductList=(props)=>{
  const { products } = props;
  return (
    <>
    { products.map((productName) => (
      <ProductCard key={productName} productName={productName} />
    )) }
    </>
  );
}
export default ProductList