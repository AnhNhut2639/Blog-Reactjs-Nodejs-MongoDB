import React from "react";
import "./Newstatus.css";
import MainHeader from "../MainHeader";
import UploadCenter from "./UploadCenter";

function NewStatus(props) {
  return (
    <React.Fragment>
      <MainHeader />
      <UploadCenter />
    </React.Fragment>
  );
}

export default NewStatus;
