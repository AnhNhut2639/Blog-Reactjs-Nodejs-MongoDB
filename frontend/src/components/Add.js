import React, { useState, useEffect } from "react";
import axios from "axios";

function Add(props) {
  const [listUsers, setListUsers] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/login")
      .then((response) => {
        // console.log(response.data);
        let { data } = response;
        setListUsers(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handlePrevents = (e) => {
    e.preventDefault();

    // let id = 39;
    // axios.post("http://localhost:3001/login/data/" + id);
    // axios({
    //   method: "post",
    //   url: "http://localhost:3001/login/data/",
    //   data: {
    //     firstName: "Fred",
    //     lastName: "Flintstone",
    //   },
    // });

    axios.post("http://localhost:3001/login/data/", {
      username: username,
      password: password,
    });
  };
  console.log(listUsers);
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handlePrevents}>
          <input
            type="text"
            placeholder="Nhập tên tài khoản"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nhập mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Đăng Ký</button>
        </form>

        <div>Danh sách các users trong Database mongoDB</div>
        <ul>
          {listUsers.map((user, index) => {
            return <li key={index}>{user.username} </li>;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Add;
