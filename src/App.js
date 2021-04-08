import "./assets/App.css";
import React from "react";
import { Button } from "@material-ui/core";
import menuHeader from "./views/header";

// import create from "zustand";

function App() {
  return (
    <div className="App">
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
