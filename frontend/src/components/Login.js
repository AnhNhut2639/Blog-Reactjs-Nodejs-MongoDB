import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./Login.css";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";

function Login(props) {
  const [dataUsers, setDataUsers] = useState([]);
  const [account, setAccount] = useState();
  const [pass, setPass] = useState();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/login`)
      .then((response) => {
        let { data } = response;
        setDataUsers(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    let res = dataUsers.find((user) => {
      return (
        account === user.username && bcrypt.compareSync(pass, user.password)
      );
    });

    console.log(res);

    if (res) {
      let payload = {
        user: res.username,
        secret: res.password,
        id: res.id,
        fullName: res.fullname,
      };

      let token = jwt.sign({ payload }, process.env.REACT_APP_MY_SERECT_KEY);

      Cookies.set("accessToken", token);
      history.push("/newsfeeds");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };
  return (
    <React.Fragment>
      <div className="section">
        <div className="left"></div>
        <div className="center">
          <div className="header">
            <h1>Welcome to the website</h1>
          </div>
          <div className="footer">
            <div className="btn__login">
              <button>User Login</button>
            </div>

            <div className="form__login">
              <form onSubmit={handleLogin}>
                <div className="frm__icon">
                  <span>
                    <BiUserCircle size="25px" color="white" />
                  </span>

                  <input
                    type="text"
                    placeholder="Email or Username"
                    onChange={(e) => setAccount(e.target.value)}
                  />
                </div>

                <div className="frm__icon">
                  <span>
                    <RiLockPasswordLine size="25px" color="white" />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>

                <button type="submit">Login</button>
              </form>
            </div>

            <div className="regis">
              <Link to="/register">Registration</Link>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </React.Fragment>
  );
}

export default Login;
