import React from "react";
import { Route, Redirect } from "react-router-dom";

// Private route Rules:
// 1. it has the same API as <Route/>
// 2. it renders a <Route/> and passed off the props through to it.
//  3 it checks if the user is authenticated. if they are, it renders the component props if not redirect to login

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
