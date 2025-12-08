import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "leaflet/dist/leaflet.css";
import "./LeafletFix.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
