import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header/>
        <Route path="/" exact ></Route>
        <Route path="/detail" exact component={Detail}></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/cart" exact component={CartPage} />
        

      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
