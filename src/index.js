import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_APP_KEY);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// reportWebVitals();
