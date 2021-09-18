import React from "react";
import "./HomePage.css";
import MainHeader from "../MainHeader";
import HomeLander from "./HomeLander";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
function HomePage(props) {
  return (
    <React.Fragment>
      <MainHeader />
      <div className="homepage">
        <HomeLeft />
        <HomeLander />
        <HomeRight />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
