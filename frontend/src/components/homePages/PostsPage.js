import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import InputEmoji from "react-input-emoji";
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";

function PostsPage(props) {
  const [posts, setPosts] = useState([]);
  const [cmt, setCmt] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/home", { withCredentials: true })
      .then(function (response) {
        let { data } = response;
        setPosts(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/getdatacmt", { withCredentials: true })
      .then(function (response) {
        let { data } = response;
        setCmt(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleClick = (image, status, avatar, username, idPost) => {
    // get comment thong qua idPost
    document.getElementById("reading").style.display = "flex";

    const element = (
      <React.Fragment>
        <div className="overlay">
          <div className="contentCommon">
            <div className="image-content">
              <img src={image} alt="Deo co" />
            </div>

            <div className="main-content">
              <div className="info-ownPost">
                <div className="info-ownImg">
                  <img src={avatar} alt={username} />
                </div>
                <div className="info-ownInfo">{username}</div>
                <div className="info-option">...</div>
              </div>
              {/*  */}
              <div className="comment-Post">
                <div className="coverCmt">
                  <div className="cmt-ownImg">
                    <img src={avatar} alt={username} />
                  </div>
                  <div className="cmt-ownInfo">
                    <b>{username}:</b>&ensp; {status}
                  </div>
                  <div className="cmt-option">
                    <strong>...</strong>
                  </div>
                </div>
                {/*  */}

                {cmt.map((cmt) => {
                  if (idPost === cmt.idPostCmt) {
                    return (
                      <div className="coverCmt">
                        <div className="cmt-ownImg">
                          <img src={cmt.userAvatar} alt={username} />
                        </div>
                        <div className="cmt-ownInfo">
                          <b>{cmt.userCmt}:</b>&ensp; {cmt.contentCmt}
                        </div>
                        <div className="cmt-option">
                          <strong>...</strong>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              {/*  */}
              <div className="info-aboutPost">
                <div className="aboutPosted-icon">
                  <div className="icon-react">
                    <FaRegHeart />
                    &ensp;
                    <FaRegComment />
                    &ensp;
                    <FaRegPaperPlane />
                  </div>

                  <div className="icon-bookmark">
                    <FaRegBookmark />
                  </div>
                </div>

                <div className="aboutPosted-likedBy">
                  <p>
                    Liked by <strong>Thi Thi </strong>and{" "}
                    <strong>1 other</strong>
                  </p>
                  <small>May 9th, 1998</small>
                </div>

                <div className="aboutPosted-Incommented">
                  <InputEmoji placeholder="Type a comment" />
                </div>
              </div>
            </div>
          </div>

          <div className="alterOverPlay" onClick={handleDisplay}></div>
        </div>
      </React.Fragment>
    );
    ReactDOM.render(element, document.getElementById("reading"));
  };

  const handleDisplay = (cmt) => {
    document.getElementById("reading").style.display = "none";
  };

  return (
    <React.Fragment>
      <div className="posts page" id="postschange">
        <div className="external-overlay">
          {posts.map((post) => {
            return (
              <div
                className="my-post"
                onClick={() =>
                  handleClick(
                    post.image,
                    post.content,
                    post.imageUser,
                    post.username,
                    post.idPost
                  )
                }
              >
                <div className="image-overlay">
                  <img src={post.image} alt="herb" />
                  <div className="collapse-icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="sticky-note"
                      className="svg-inline--fa fa-sticky-note fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"
                      ></path>
                    </svg>
                  </div>
                  <div className="overlay">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="heart"
                        className="svg-inline--fa fa-heart fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                        ></path>
                      </svg>
                      99
                    </span>
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comment"
                        className="svg-inline--fa fa-comment fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                        ></path>
                      </svg>
                      99
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          {/*  */}
        </div>

        <div className="reading-post" id="reading"></div>
      </div>
    </React.Fragment>
  );
}

export default PostsPage;
