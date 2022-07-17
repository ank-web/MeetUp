import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import './index.css';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
