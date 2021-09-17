import React from "react";

function RightColumn(props) {
  return (
    <React.Fragment>
      <div className="right-column">
        <div className="right-function">
          <div className="switch-account">
            <div className="avatar">
              <img src="/me2.jpg" alt="" />
            </div>
            <div className="info-account">
              <div className="account-username">Delima anh nhut</div>
              <div className="account-name">Anh Nhựt</div>
            </div>
            <div className="switch">Switch</div>
          </div>
          <div className="suggest4-you">
            <span>Suggest for you</span>
            <span>See all</span>
          </div>
          <div className="suggest-account">
            {/*  */}
            <div className="switch-follow">
              <div className="avatar-follow">
                <img src="/me2.jpg" alt="" />
              </div>
              <div className="info-account-follow">
                <div className="follow-username">Delima anh nhut</div>
                <div className="follow-name">New to faketagram</div>
              </div>
              <div className="follow">Follow</div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightColumn;
