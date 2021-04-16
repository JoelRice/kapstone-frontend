import React from "react";
import { Button, useScrollTrigger } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";

import { Route, Switch } from "react-router-dom";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";
import DeleteAccount from "./views/delete";
import Toast from "./views/toast";
import AdoptionsPage from "./views/adopt"
import Users from "./views/users"
import Shop from "./views/shop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toast />
        <Route
          path="/:page?"
          render={(history) => {
            return <MenuHeader {...history} />;
          }}
        />
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/delete" component={DeleteAccount} />
          <Route exact path="/adoption" component={AdoptionsPage} />
        {/* Routes for the drop down menu, still need to add components */}
        {/* <Route exact path="/profile" component={Users} /> */}
        <Route exact path="/trades" component="" />
        <Route exact path="/myinventory" component="" />
        <Route exact path="/settings" component="" />
        {/* Route to see other users profiles  */}
        <Route exact path="/shop" component={Shop} />
        <Route path="/profile/:username?" render={(history) => {
          return (
            <Users {...history}/>
            )
        }} />

        </Switch>
      </header>
    </div>
  );
}

export default App;
