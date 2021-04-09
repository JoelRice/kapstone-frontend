import React from "react";
import {Grid} from "@material-ui/core";

const Shop=()=>{
    return(
    <Grid container direction="column">
        <Grid item> header if any may import from Rosie's Header</Grid>
            <Grid item container> 
                <Grid item xs={0} sm={2}/>
                <Grid item xs={12} sm={8}>
                        item
                        item
                        item
                        item
                        item
                        item
                        item
                        item
                </Grid>
                <Grid item xs={0} sm={2}/>
            </Grid> 
    </Grid>
    )
}
export default Shop 