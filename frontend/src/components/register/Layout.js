import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import "./Register.css";
function Layout(props) {
  let history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [desription, setDescription] = useState();
  const [imgUrl, setImgUrl] = useState("/defaultavatar.png");

  const getImgUrl = (e) => {
    const srcFile = e.target.files[0];
    previewFileSrc(srcFile);
  };

  const previewFileSrc = (srcFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(srcFile);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting.......");
    register(imgUrl);
  };

  const register = async (imgAvatar) => {
    if (confirm !== password) {
      alert("Mật Khẩu không trùng khớp");
      return;
    }
    if (imgUrl === "/defaultavatar.png") {
      alert("Vui lòng chọn ảnh đại diện");
      return;
    }
    if (username === "") {
      alert("Vui lòng nhập username");
      return;
    }

    if (fullname === "") {
      alert("Vui lòng nhập tên đầy đủ");
      return;
    }

    if (email === "") {
      alert("Vui lòng nhập email");
      return;
    }

    axios
      .post("http://localhost:3001/user/register", {
        data: imgAvatar,
        username: username,
        password: confirm,
        fullname: fullname,
        desription: desription,
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push("/login");
  };

  return (
    <React.Fragment>
      <div className="register-layout">
        <div className="register-left"></div>
        <div className="register-center">
          <div
            className="register-section"
            style={{
              backgroundImage: `url("/backgroundregister.png")`,
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="register-frame">
                <div className="register-avatar">
                  <div className="personnel-avatar">
                    <div
                      id="display_avatar"
                      style={{
                        backgroundImage: `url("${imgUrl}")`,
                      }}
                    ></div>
                  </div>
                  <div className="input-avatar">
                    <input
                      type="file"
                      className="form-control-file"
                      name="avatarPost"
                      id="image_avatar"
                      accept="image/png, image/jpg"
                      onChange={getImgUrl}
                    />
                  </div>
                </div>

                <div className="personnel-info">
                  <div className="register-form">
                    <div className="title-form">
                      <span>Đăng ký tài khoản</span>
                    </div>
                    <label htmlFor="fullName">Họ tên</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullname"
                      placeholder="Nhập Họ và Tên"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    <label htmlFor="user">Username</label>
                    <input
                      type="text place"
                      id="user"
                      name="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="pass">Mật khẩu</label>
                    <input
                      type="text"
                      id="pass"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirm">Xác nhận mật khẩu</label>
                    <input
                      type="text"
                      id="confirm"
                      name="confirmpassword"
                      placeholder="Confirm password"
                      onChange={(e) => setConfirm(e.target.value)}
                    />
                    <label htmlFor="mail">Email</label>
                    <input
                      type="text"
                      id="mail"
                      name="email"
                      placeholder="emai"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="descript">Mô tả về bạn</label>
                    <input
                      type="textarea"
                      id="descript"
                      name="desciptionself"
                      placeholder="Mô tả về bạn"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="regis-post">
                <button type="submit">Regis</button>
              </div>
            </form>
          </div>
        </div>

        <div className="register-right"></div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
