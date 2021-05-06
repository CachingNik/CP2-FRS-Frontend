import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Flights from "./components/flights";
import LoginForm from "./components/loginFom";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/flights/:date?" component={Flights} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
