import "./assets/App.css";
import React from "react";
import { Button } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";

import { Route, Switch } from "react-router";
import SignUpPage from "./views/signup";
import LoginPage from "./views/login";
import { BrowserRouter } from "react-router-dom";

const Routes = () => {
  return (
  <BrowserRouter>
  <Switch>
  <Route exact path="/admin" component={Admin}/>
  <Route exact path="/signup" component={SignUpPage}/>
  <Route exact path="/login" component={LoginPage}/>
</Switch>
</BrowserRouter>
  )
}

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <MenuHeader />
        <Routes/>
        <p>
          <Button color="secondary">Press me!</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
