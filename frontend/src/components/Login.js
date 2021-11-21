import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import "./Login.css";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

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
      {/* <div>welcome to the Login page </div> */}
      <div className="center">
        <div className="header">Login Form</div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Username"
            onChange={(e) => setAccount(e.target.value)}
          />
          <i className="far fa-envelope"></i>
          <input
            id="pswrd"
            type="text"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <i className="fas fa-lock"></i>
          <input type="submit" value="Sign in" />
          <a href="http://localhost:3000/register">Regisgter</a>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
