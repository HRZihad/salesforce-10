import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { SnackbarProvider } from "notistack";
import SocketData from "components/InitialLoad/SocketData";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <SnackbarProvider maxSnack={1}>
      <SocketData />
      
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
