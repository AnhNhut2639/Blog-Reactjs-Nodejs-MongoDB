import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Add from "../components/Add";
import NotFound from "./NotFound";
function Index(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={Add} />
      {/* <Route path={`${match.url}/add/:id`} component={Add} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default Index;
