/*import React from "react";
import { Switch, Route } from "react-router-dom";

function Shop(props) {
  return <div className="shop-page"></div>;
}

export default Shop;*/

import React from "react";
import {Grid} from "@material-ui/core";
import ProductList from "../components/productList";


const Shop=()=>{

  return (
    <main>
    <Grid container justify="center" spacing={4}>
      <Grid item>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <ProductList />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
    </main>
  );
};
export default Shop 