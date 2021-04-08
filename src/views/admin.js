//upload cat picture
//upload name of cat
//upload stats
import React from "react";
import { Button } from "@material-ui/core";

function Admin() {
  return (
    <form>
      <div>
        <h1>Admin Page</h1>
        <div className="form">
          <input type="text" name="name" id="name" />
          <Button>Name</Button>
          <input type="text" name="stats" id="stats" />
          <Button>Stats</Button>
          <div>
            <input type="text" name="url" id="url" />
            <Button>Picture</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Admin;
