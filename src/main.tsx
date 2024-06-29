import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Theme appearance="inherit" accentColor="amber">
        <App />
      </Theme>
    </Router>
  </React.StrictMode>
);
