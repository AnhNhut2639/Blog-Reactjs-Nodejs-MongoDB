import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import axios from "axios";

function RightColumn(props) {
  const [users, setUsers] = useState([]);
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
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/getusers", { withCredentials: true })
      .then((response) => {
        let { data } = response;
        setUsers(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="right-column">
        <div className="right-function">
          <div className="switch-account">
            <div className="avatar">
              <img src={person.avatar} alt="" />
            </div>
            <div className="info-account">
              <div className="account-username">{person.fullname}</div>
              <div className="account-name">{person.username}</div>
            </div>
            <div className="switch">Switch</div>
          </div>
          <div className="suggest4-you">
            <span>Suggest for you</span>
            <span>See all</span>
          </div>
          <div className="suggest-account">
            {/*  */}

            {users.map((user) => {
              return (
                <div key={user.id} className="switch-follow">
                  <div className="avatar-follow">
                    <img src={user.avatar} alt="" />
                  </div>
                  <div className="info-account-follow">
                    <div className="follow-username">{user.fullName}</div>
                    <div className="follow-name">
                      Join on {user.dateCreated}
                    </div>
                  </div>
                  <div className="follow">Follow</div>
                </div>
              );
            })}

            {/*  */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightColumn;
