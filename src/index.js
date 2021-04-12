import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./assets/styles/index.css";
import App from "./App";
//remove later
//object of exports
import * as Requests from "./fetchRequests";
window.req = Requests;
console.log(Requests);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
