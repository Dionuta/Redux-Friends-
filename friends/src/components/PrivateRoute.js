import React from "react";
import { Route, Redirect } from "react-router-dom";


// Requires:
// 1. It has the API as <Route />
// 2. It renders a <Route /> and passes all the props through to Route
// 3. it check is the user is authenticated, if they are, it renders the
// "component" prop if not, it redirects to /login.

const PrivateRoute = ({ component: Component, ...therest }) => {
  return (
    <Route
      {...therest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log("redirecting!!!!");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
