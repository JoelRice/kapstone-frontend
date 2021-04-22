import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import ProductList from "../components/productList";
import { getAllProductNames } from "../apis/fetchRequests";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductNames().then((res) => {
      if (res.error) {
        console.log(res);
      } else {
        setProducts(res);
      }
    });
  }, [setProducts]);

  return (
    <div>
      <Container justify="center" align="center">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          style={{
            backgroundColor: "#cfe8fc",
            width: "80vw",
          }}
        >
          <ProductList products={products} />
        </Grid>
      </Container>
    </div>
  );
};
export default Shop;
