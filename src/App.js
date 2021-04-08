import "./assets/App.css";
import React from "react";
import { Button } from "@material-ui/core";
import MenuHeader from "./views/header";
import Admin from "./views/admin.js"
// import create from "zustand";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
      <header className="App-header">
        <MenuHeader />
        <p>
          <Button color="secondary">Press me!</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
