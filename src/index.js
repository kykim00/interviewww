import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth from "./service/auth";
import { BrowserRouter } from "react-router-dom";

const auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App auth={auth} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
