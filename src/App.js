import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminProtectedRoute from "./components/common/adminProtectedRoute";
import ProtectedRoute from "./components/common/protectedRoute";
import Home from "./components/home";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Flights from "./components/flights";
import FlightSearch from "./components/flightSearch";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import FlightForm from "./components/flightForm";
import BookForm from "./components/bookForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="container mt-2">
          <Switch>
            <Route
              path="/flights/:fromId/:toId/:serviceClassId/:departure/:adult-:child"
              exact
              component={Flights}
            />
            <ProtectedRoute
              path="/flights/:id/:adult-:child/book"
              exact
              component={BookForm}
            />
            <AdminProtectedRoute
              path="/flights/:id"
              exact
              component={FlightForm}
            />
            <Route path="/flights" exact component={FlightSearch} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
