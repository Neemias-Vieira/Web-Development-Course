import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
