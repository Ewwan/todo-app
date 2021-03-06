import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("app-root");

ReactDOM.render(
  <div className="root">
    <App />
  </div>,
  rootElement
);
