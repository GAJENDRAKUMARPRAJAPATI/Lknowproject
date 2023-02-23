import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import Index from "./Project/Index";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
  <Index /> 
</React.StrictMode>


  
);
