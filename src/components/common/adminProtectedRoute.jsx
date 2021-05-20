import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../../services/authService";

const AdminProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      render={(props) => {
        const user = auth.getCurrentUser();
        if (user && user.isAdmin)
          return Component ? <Component {...props} /> : render(props);
        return <Redirect to="/not-found" />;
      }}
      {...rest}
    />
  );
};

export default AdminProtectedRoute;
