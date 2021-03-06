import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import App from "./App";
//testing api end points / remove later
// Requests are objects of exports
import * as Requests from "./apis/fetchRequests";
window.req = Requests;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/kapstone-frontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
