import React from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./app";
import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "react-toastify/dist/ReactToastify.css";


const root =ReactDom.createRoot(document.getElementById("root"))
root.render(
  
  <React.StrictMode>
    <BrowserRouter basename="contacts-manager-app" >
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)