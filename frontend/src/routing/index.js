import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "../components/Login";
// import Add from "../components/Add";
import MainPage from "../components/MainPage";
import NotFound from "./NotFound";
function Index(props) {
  const match = useRouteMatch();
  console.log(`${match.url}`);
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}login`} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Index;
