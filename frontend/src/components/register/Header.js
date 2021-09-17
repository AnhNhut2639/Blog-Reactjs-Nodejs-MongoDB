import React from "react";
function header(props) {
  return (
    <React.Fragment>
      <div className="header">
        <header>
          <div className="main-header">
            <div className="header-logo">
              <a href="/">
                <img src="/BestLogo.png" alt="ccsx" />
              </a>
            </div>
            <div className="header-search"></div>
            <div className="header-function"></div>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}

export default header;
