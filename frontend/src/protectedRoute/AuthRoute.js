import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

function AuthRoute({ token: token, component: Component, ...rest }) {
  // console.log(token);
  // const permission = jwt.decode(token, process.env.REACT_APP_MY_SERECT_KEY);

  // console.log(permission);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default AuthRoute;
