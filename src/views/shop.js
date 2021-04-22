import React, { useState, useEffect } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import ProductList from "../components/productList";
import { getAllProductNames } from "../apis/fetchRequests";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  typographyStyle: {
    color: "#2196f3",
  },
  cardMargin: {
    marginBottom: "5px",
  },
}));
const Shop = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
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
      <br />
      <Container
        justify="center"
        align="center"
        style={{ backgroundColor: "#cfe8fc", width: "80vw" }}
      >
        <Typography
          className={classes.typographyStyle}
          component="h2"
          variant="h2"
          align="center"
        >
          Shop Items
        </Typography>
        <br />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          align-items="flex-start"
        >
          <ProductList products={products} />
        </Grid>
      </Container>
    </div>
  );
};
export default Shop;
