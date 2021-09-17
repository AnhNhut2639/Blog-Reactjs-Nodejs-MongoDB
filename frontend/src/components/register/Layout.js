import React, { useState } from "react";
// import "./Register.css";
function Layout(props) {
  const [imgUrl, setImgUrl] = useState("/defaultavatar.png");

  const getImgUrl = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgUrl("/" + e.target.files[0].name);
    }
  };

  console.log(imgUrl);
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
            <form action="">
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
                    />
                    <label htmlFor="user">Username</label>
                    <input
                      type="text place"
                      id="user"
                      name="username"
                      placeholder="Username"
                    />
                    <label htmlFor="pass">Mật khẩu</label>
                    <input
                      type="text"
                      id="pass"
                      name="password"
                      placeholder="Password"
                    />
                    <label htmlFor="confirm">Xác nhận mật khẩu</label>
                    <input
                      type="text"
                      id="confirm"
                      name="confirmpassword"
                      placeholder="Confirm password"
                    />
                    <label htmlFor="mail">Email</label>
                    <input
                      type="text"
                      id="mail"
                      name="email"
                      placeholder="emai"
                    />
                    <label htmlFor="descript">Mô tả về bạn</label>
                    <input
                      type="textarea"
                      id="descript"
                      name="desciptionself"
                      placeholder="Mô tả về bạn"
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
