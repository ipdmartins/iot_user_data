import 'bootstrap/dist/css/bootstrap.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// //https://reactstrap.github.io/?path=/docs/components-button--button

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

