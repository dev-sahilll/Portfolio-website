import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form";
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/form" element={<Form />}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
