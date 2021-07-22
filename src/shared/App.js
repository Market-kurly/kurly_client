import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";
import Header from "../components/Header";
import CartPage from "../pages/CartPage";
import Order from "../pages/Order";
import SearchItem from "../pages/SearchItem";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./Cookie";

function App() {
  const dispatch = useDispatch();
  const is_token = getCookie("token") ? true : false;
  React.useEffect(() => {
    if (is_token) {
      dispatch(userActions.loginCheck());
    }
  }, []);
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/pages/login" component={Login} />
        <Route path="/pages/signup" component={Signup} />
        <Route path="/order" exact component={Order}></Route>
        <Route path="/search/:word" exact component={SearchItem}></Route>
        <Route path="/cart/:id" exact component={CartPage} />
        

      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
