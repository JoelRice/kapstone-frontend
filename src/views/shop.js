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
    return(
            <Grid item container spacing={2} style={{backgroundColor: "#43463d"}} > 
                <Grid item xs={12} sm={8} md={4}>
                  <ProductList></ProductList>
                </Grid>
            </Grid> 
    )
}
export default Shop 