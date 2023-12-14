import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { GolbalStyle } from "./styles/reset.ts";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
      <GolbalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
