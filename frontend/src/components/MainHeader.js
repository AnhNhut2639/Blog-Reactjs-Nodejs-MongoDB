import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  FaRegHeart,
  FaRegPaperPlane,
  FaHome,
  FaRegPlusSquare,
  FaRegCompass,
} from "react-icons/fa";

function MainHeader(props) {
  const [person, setPerson] = useState([]);
  let history = useHistory();

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
  }, []);

  const handleImgCLick = () => {
    history.push("/home");
  };

  return (
    <React.Fragment>
      <div className="header">
        <header>
          <div className="main-header">
            <div className="header-logo">
              <a href="/newsfeeds">
                <img src="/BestLogo.png" alt="BestLogoEver" />
              </a>
            </div>
            <div className="header-search">
              <input type="text" placeholder="Search" />
            </div>
            <div className="header-function">
              <FaHome />

              <FaRegPaperPlane />

              <FaRegPlusSquare />

              <FaRegCompass />

              <FaRegHeart />

              <img onClick={handleImgCLick} src={person.avatar} alt="profile" />
            </div>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}

export default MainHeader;
