import React from "react";
import MainHeader from "../MainHeader";
import LeftColumn from "./LeftColumn";
import MiddleColumn from "./MiddleColumn";
import "./NewsFeeds.css";
import RightColumn from "./RightColumn";

function NewFeeds(props) {
  return (
    <React.Fragment>
      <MainHeader />
      <div className="website">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </React.Fragment>
  );
}

export default NewFeeds;
