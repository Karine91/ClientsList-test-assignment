import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import ClientsPage from "./components/ClientsPage";
import "semantic-ui-css/semantic.min.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <ClientsPage />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
