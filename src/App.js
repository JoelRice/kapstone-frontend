import "./assets/styles/App.css";
import React from "react";
import { Button } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js";
import { Switch, Route } from "react-router-dom";
import Toast from "./components/Toast";
import LoginPage from "./views/login";

function App() {
  return (
    <div className="App">
      <Toast />
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route path="/loginPage" component={LoginPage} />
      </Switch>
      <header className="App-header">
        <MenuHeader />
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
