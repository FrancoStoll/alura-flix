import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterApp from "./routes/router";
import { VideosProvider } from "./context/VideosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideosProvider>
      <RouterApp />
    </VideosProvider>
  </React.StrictMode>
);
