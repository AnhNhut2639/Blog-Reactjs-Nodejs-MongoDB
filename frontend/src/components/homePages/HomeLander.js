import React from "react";
import Igtv from "./Igtv";
import PostsPage from "./PostsPage";
import Profile from "./Profile";
import Saved from "./Saved";
import Tagged from "./Tagged";

function HomeLander(props) {
  const hideAppeTab = (e) => {
    let id = e.target.name;
    console.log(id);
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(id).style.display = "flex";
  };

  return (
    <React.Fragment>
      <div className="home-lander">
        <Profile />
        <div className="tab-func">
          <button onClick={hideAppeTab} name="postschange">
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="list"
              className="svg-inline--fa fa-list fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
            </svg>{" "}
            POSTS
          </button>
          <button name="igtvchange" onClick={hideAppeTab}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="tv"
              className="svg-inline--fa fa-tv fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"
              ></path>
            </svg>{" "}
            IGTV
          </button>
          <button
            className="option-saved"
            name="savedchange"
            onClick={hideAppeTab}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="bookmark"
              className="svg-inline--fa fa-bookmark fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
              ></path>
            </svg>{" "}
            SAVED
          </button>
          <button
            className="option-tagged"
            name="taggedchange"
            onClick={hideAppeTab}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="id-badge"
              className="svg-inline--fa fa-id-badge fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h288v416zM144 112h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16zm48 176c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"
              ></path>
            </svg>{" "}
            TAGGED
          </button>
        </div>
        {/*  */}
        <div className="function-feature">
          <PostsPage />
          <Igtv />
          <Saved />
          <Tagged />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeLander;
