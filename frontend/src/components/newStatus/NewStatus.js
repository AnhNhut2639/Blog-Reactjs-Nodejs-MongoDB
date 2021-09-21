import React from "react";
import "./Newstatus.css";
import MainHeader from "../MainHeader";
import UploadCenter from "./UploadCenter";
import { withRouter } from "react-router";

function NewStatus(props) {
  return (
    <React.Fragment>
      <MainHeader />
      <UploadCenter />
    </React.Fragment>
  );
}

export default withRouter(NewStatus);
