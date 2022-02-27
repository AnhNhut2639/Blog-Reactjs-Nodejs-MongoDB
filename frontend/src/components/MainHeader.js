import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import {
  FaRegHeart,
  FaRegPaperPlane,
  FaHome,
  FaRegPlusSquare,
  FaRegCompass,
  FaSearch,
} from "react-icons/fa";

function MainHeader(props) {
  const [person, setPerson] = useState([]);

  const token = Cookies.get("accessToken");

  const result = jwt.decode(token, process.env.REACT_APP_MY_SERECT_KEY);
  let id = result.payload.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/trigger/${id}`)
      .then((response) => {
        let { data } = response;
        setPerson(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <React.Fragment>
      <div className="header">
        <header>
          <div className="main-header">
            <div className="header-logo">
              <Link to="/newsfeeds">
                <img src="/BestLogo.png" alt="BestLogoEver" />
              </Link>
            </div>
            <div className="header-search">
              <div className="abs-icon">
                <FaSearch className="icon" id="iconSearch" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="header-function">
              <FaHome />

              <FaRegPaperPlane />

              <FaRegPlusSquare />

              <FaRegCompass />

              <FaRegHeart />
              <Link to="/home">
                <img src={person.avatar} alt="profile" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}

export default MainHeader;
