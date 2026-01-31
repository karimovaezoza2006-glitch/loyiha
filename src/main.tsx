import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import ProviderConfig from "./router/provider-config";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderConfig>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ProviderConfig>
  </React.StrictMode>
);
