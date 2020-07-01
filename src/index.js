import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/style.css";
import $ from 'jquery';
import Popper from "popper.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
