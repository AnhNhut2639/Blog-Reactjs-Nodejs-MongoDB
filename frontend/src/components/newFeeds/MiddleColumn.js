import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Story from "./Story";
import InputEmoji from "react-input-emoji";
import axios from "axios";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import Comment from "./Comment";
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
import LikeButton from "./LikeButton";
function MiddleColumn(props) {
  const token = Cookies.get("accessToken");
  const currentUser = jwt.decode(token, process.env.REACT_APP_MY_SERECT_KEY);
  const idCurrentUser = currentUser.payload.id;

  const [newsFeeds, setNewsFeeds] = useState([]);
  const [dataCmt, setDataCmt] = useState([]);
  const [listsLike, setListsLike] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/newsfeeds")
      .then((response) => {
        let { data } = response;
        setNewsFeeds(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [newsFeeds]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/getdatacmt", { withCredentials: true })
      .then(function (response) {
        let { data } = response;
        setDataCmt(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dataCmt]);

  // get lists like of current user
  useEffect(() => {
    axios
      .get("http://localhost:3001/user/getlikelist", { withCredentials: true })
      .then(function (response) {
        let { data } = response;
        setListsLike(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [listsLike]);

  const viewpost = (image, avatar, uname, status, idPost) => {
    document.getElementById("view").style.display = "flex";

    const viewElement = (
      <React.Fragment>
        <div className="content-overplay">
          <div className="content-view">
            <div className="view-image">
              <img src={image} alt="deo co" />
            </div>
            <div className="view-info">
              <div className="info-owner">
                <div className="owner-avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="owner-name">{uname}</div>
                <div className="owner-option">...</div>
              </div>
              <div className="info-cmt">
                {/*  */}
                <div className="extra-coverCmt">
                  <div className="extra-cmt-ownImg">
                    <img src={avatar} alt={uname} />
                  </div>
                  <div className="extra-cmt-ownInfo">
                    <b>{uname}:</b>&ensp; {status}
                  </div>
                  <div className="extra-cmt-option">
                    <strong>...</strong>
                  </div>
                </div>
                {/*  */}

                {dataCmt.map((cmt) => {
                  if (idPost === cmt.idPostCmt) {
                    return (
                      <div className="extra-coverCmt">
                        <div className="extra-cmt-ownImg">
                          <img src={cmt.userAvatar} alt={uname} />
                        </div>
                        <div className="extra-cmt-ownInfo">
                          <b>{cmt.userCmt}:</b>&ensp; {cmt.contentCmt}
                        </div>
                        <div className="extra-cmt-option">
                          <strong>...</strong>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              <div className="info-extra">
                <div className="extra-icon">
                  <div className="extra-react">
                    <FaRegHeart />
                    &ensp;
                    <FaRegComment />
                    &ensp;
                    <FaRegPaperPlane />
                  </div>

                  <div className="extra-bookmark">
                    <FaRegBookmark />
                  </div>
                </div>
                <div className="extra-likedBy">
                  <p>
                    Liked by <strong>Thi Thi </strong>and{" "}
                    <strong>1 other</strong>
                  </p>
                  <small>May 9th, 1998</small>
                </div>
                <div className="extra-cmt">
                  <InputEmoji placeholder="Type a comment" />
                </div>
              </div>
            </div>
          </div>

          <div className="alterContentView" onClick={closeview}></div>
        </div>
      </React.Fragment>
    );
    ReactDOM.render(viewElement, document.getElementById("view"));
  };

  const closeview = () => {
    document.getElementById("view").style.display = "none";
  };

  const handleLike = (id, idPostToAdd) => {
    document.getElementById(id).style.display = "flex";
    setTimeout(() => {
      handleHideHeart(id, idPostToAdd);
    }, 1000);
  };

  const handleHideHeart = (id, idPostToAdd) => {
    document.getElementById(id).style.display = "none";

    handleLikePost(id, idPostToAdd);
  };
  const handleLikePost = (id, idPostToAdd) => {
    const result = jwt.decode(token, process.env.REACT_APP_MY_SERECT_KEY);
    let idUser = result.payload.id;
    let idPost = id; //_id
    let fullName = result.payload.fullName;
    // luu thong tin nguoi like vao post
    axios
      .post(
        "http://localhost:3001/user/likepost",
        {
          idUser: idUser,
          idPost,
          fullName: fullName,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // luu thong tin bai viet duoc like vao user
    axios
      .post(
        "http://localhost:3001/user/buttonlike",
        {
          idUser, //idCurrentUser
          idPost: idPostToAdd, //news.idPost
        },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="middle-column">
        <Story />

        {newsFeeds.map((news, index) => {
          return (
            <div className="news-feed" key={index}>
              <div className="info-feed">
                <div className="logo-feed">
                  <img src={news.avatar} alt="Logo" />
                </div>
                <div className="info-news">
                  <div className="own-news">{news.username}</div>
                  <div className="where-news">LA Lakers</div>
                </div>
                <div className="option-feed">
                  <div className="option">...</div>
                </div>
              </div>
              <div className="content-feed">
                <div
                  className="content-feed-img"
                  onDoubleClick={() => handleLike(news._id, news.idPost)}
                >
                  <img src={news.image} alt="Tom hid" />
                  <div className="heartLike" id={news._id}>
                    <img src="/heart.png" alt="heart Like" />
                  </div>
                </div>
                <div className="like-cmt-shr">
                  <div className="icon-like-share-cmt">
                    <LikeButton
                      idPost={news.idPost}
                      idToUnLike={news._id}
                      idCurrentUser={idCurrentUser}
                      userFullname={currentUser.payload.fullName}
                    />
                    <svg
                      onClick={() =>
                        viewpost(
                          news.image,
                          news.avatar,
                          news.username,
                          news.content,
                          news.idPost
                        )
                      }
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="paper-plane"
                      className="svg-inline--fa fa-paper-plane fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="like-count">{news.likeCounts} likes</div>
              <div className="status-dayPost">
                <div className="status">
                  <span>{news.username}:</span> {news.content}
                  {news.countCmt >= 2 ? (
                    <p
                      onClick={() =>
                        viewpost(
                          news.image,
                          news.avatar,
                          news.username,
                          news.content,
                          news.idPost
                        )
                      }
                    >
                      View all {news.countCmt} comments
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="dayPost">{news.datePosted}</div>
              </div>
              <div className="commentary">
                <Comment id={news.idPost} />
              </div>
            </div>
          );
        })}

        <div className="viewdetail" id="view"></div>
      </div>
    </React.Fragment>
  );
}

export default MiddleColumn;
