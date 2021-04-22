import React from "react";
import ProductCard from "../components/productCard";

const ProductList = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((productName) => (
        <ProductCard key={productName} productName={productName} />
      ))}
    </>
  );
};
export default ProductList;
