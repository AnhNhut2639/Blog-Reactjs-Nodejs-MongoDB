import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function LikeButton(props) {
  const { idPost, idToUnLike, idCurrentUser, userFullname } = props;
  // idPost là news.idPost
  //idToUnLike===_id của  post
  // userFullname để add vào post khi like
  const [list, setList] = useState([]);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get("http://localhost:3001/user/getlikelist", {
        withCredentials: true,
        cancelToken: source.token,
      })
      .then(function (response) {
        let { data } = response;
        setList(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      source.cancel();
    };
  }, [list]);

  const handleUnlikePost = (id, user, idPostLik) => {
    let idPost = id; //_id
    let idPostLike = idPostLik; //idPost(in dbase)
    let idUser = user;
    // xoa trong collection users
    axios
      .post(
        "http://localhost:3001/user/buttonunlike",
        {
          idUser,
          idPostLike,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // xoa trong collection posts
    axios
      .post(
        "http://localhost:3001/user/unlike",
        {
          idPost,
          idCurrentUser,
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

  const handleButtonLike = (id, idPos, username, idPostToAdd) => {
    let idUser = id;
    let idPost = idPos;
    // luu thong tin bai viet duoc like vao user
    axios
      .post(
        "http://localhost:3001/user/buttonlike",
        {
          idUser, //idCurrentUser
          idPost, //news.idPost
        },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // luu thong tin nguoi like vao post
    axios
      .post(
        "http://localhost:3001/user/likepost",
        {
          idUser: idUser,
          fullName: username,
          idPost: idPostToAdd,
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

  var inList = false;
  const found = list.find((e) => e.idPost === idPost);

  if (found) {
    inList = true;
  }

  if (inList) {
    return (
      <span>
        <FaHeart
          color="red"
          onClick={() => handleUnlikePost(idToUnLike, idCurrentUser, idPost)}
        />
        {/* khi nhan unlike se xoa luon trong 2 collect users va posts */}
      </span>
    );
  }
  if (inList === false) {
    return (
      <span>
        <FaRegHeart
          onClick={() =>
            handleButtonLike(idCurrentUser, idPost, userFullname, idToUnLike)
          }
        />
      </span>
    );
  }
}

export default LikeButton;
