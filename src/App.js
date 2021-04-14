import React from "react";
import { Button } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";

import { Route, Switch } from "react-router-dom";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";
import DeleteAccount from "./views/delete";
import Toast from "./views/toast";
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
        </Switch>
      </header>
    </div>
  );
}

export default App;
