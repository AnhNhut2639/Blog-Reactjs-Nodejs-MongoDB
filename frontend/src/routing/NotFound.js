import React from "react";
import { useLocation } from "react-router-dom";

function NotFound(props) {
  let location = useLocation();
  return (
    <React.Fragment>
      <div>
        <h1> Pages {location.pathname} Not Found </h1>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
