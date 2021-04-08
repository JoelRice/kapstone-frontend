import "./assets/styles/App.css";
import React from "react";
import { Button } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";

import { Route, Switch } from "react-router-dom";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";

// import create from "zustand";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuHeader />
        <Switch>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/login" component={LoginPage}/>
   </Switch>
        <p>
          <Button variant="outlined" color="primary">
            Press me!
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;