import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (!auth.getCurrentUser)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
      {...rest}
    />
  );
};

export default ProtectedRoute;
