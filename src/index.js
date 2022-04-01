import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer, initialState } from "./redux/reducer";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(reducer, initialState);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
