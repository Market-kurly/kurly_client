import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "redux/configureStore";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
