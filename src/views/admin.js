//upload cat picture
//upload name of cat
//upload stats
import React from "react";
import {Button} from "@material-ui/core";



function Admin(){
    return (
        <form>
            <div>
            <h1>Admin Page</h1>
                <div className="form">
                    <input type="text" name="name" id="name"/>
                    <input type="text" name="stats" id="stats"/>
                    <input type="text" name="url" id="url"/>
                  <div className="buttons">
                    <Button color="default">Name</Button>
                    <Button color="default">Stats</Button>
                    <Button color="default">Picture</Button>
                  </div>  
                </div>
            </div>
        </form>

    )
}
export default Admin;