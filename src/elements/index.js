import React from "react";
import ReactDOM from "react-dom";

import Grid from "./Grid";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";
import Image from "./Image";

import { Provider } from "react-redux";
import App from './shared/App';
import store from "./redux/configureStore"

export {Grid, Button, Input, Text, Image};

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );