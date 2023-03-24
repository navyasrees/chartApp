import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StocksHistory from "../src/components/StockData.tsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StocksHistory /> */}
  </React.StrictMode>
);
