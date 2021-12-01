import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./routing/NotFound";
// import Add from "./components/Add";
const RoutingIndex = React.lazy(() => import("./routing/index"));

function App() {
  return (
    <div className="wrapper">
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={RoutingIndex} />
            {/* <Redirect exact from="/" to="/add" /> */}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
