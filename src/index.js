import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Index from "./Project/Index";
import BasicDetails from "./Project/BasicDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
  <Index /> 
</React.StrictMode>


  // <BrowserRouter>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </BrowserRouter>
);
