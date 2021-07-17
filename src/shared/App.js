import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header/>
        <Route path="/" exact ></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
