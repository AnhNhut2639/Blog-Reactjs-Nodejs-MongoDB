import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

function Profile(props) {
  const [info, setInfo] = useState([]);

  const accessToken = Cookies.get("accessToken");

  const result = jwt.decode(accessToken, process.env.REACT_APP_MY_SERECT_KEY);
  let id = result.payload.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/trigger/${id}`)
      .then((response) => {
        let { data } = response;
        setInfo(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <React.Fragment>
      <div className="profile">
        <div className="profile-avatar">
          <img src={info.avatar} alt="avatar" />
        </div>
        <div className="profile-info">
          <div className="info">
            <div className="info-username">{info.username}</div>
            <div className="edit-info">
              <button>edit profile</button>
            </div>
            <div className="feature-icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-cog"
                className="svg-inline--fa fa-user-cog fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="measurement">
            <div className="posts">
              <span>4</span> posts
            </div>
            <div className="followers">
              <span>82</span> follower
            </div>
            <div className="following">
              {" "}
              <span>387</span> following
            </div>
          </div>
          <div className="info-name">{info.fullname}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
