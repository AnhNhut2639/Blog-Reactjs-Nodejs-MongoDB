import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function UploadCenter(props) {
  // const [imgBg, setImgBg] = useState("");
  let history = useHistory();
  const [text, setText] = useState();
  const [previewFile, setPreviewFile] = useState();
  let token = Cookies.get("accessToken");

  const getImgStatus = (e) => {
    const file = e.target.files[0];
    previewFileFunc(file);
  };

  const previewFileFunc = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewFile(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting.......");
    uploadPost(previewFile);
  };

  const uploadPost = async (previewFile) => {
    if (text === "") {
      alert("Hãy nhập nội dung");
      return;
    }
    if (previewFile === undefined) {
      alert("Hãy chọn ảnh");
      return;
    }
    axios
      .post("http://localhost:3001/user/newpost", {
        img: previewFile,
        content: text,
        token: token,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push("/home");
  };

  return (
    <React.Fragment>
      <div className="new-upload">
        <div className="upload-left"></div>
        <div className="upload-center">
          <div
            className="my-upload"
            style={{
              backgroundImage: `url("/BgImage.jpg")`,
            }}
          >
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="upload-content">
                <div className="content-image">
                  <div
                    className="display-image"
                    id="display_image"
                    style={{
                      backgroundImage: `url(${previewFile})`,
                    }}
                  ></div>
                  <div className="content-input">
                    <input
                      type="file"
                      className="form-control-file"
                      name="imagePost"
                      id="image_input"
                      onChange={getImgStatus}
                    />
                  </div>
                </div>
                <div className="content-main">
                  <InputEmoji
                    value={text}
                    placeholder="Type a message"
                    onChange={setText}
                  />
                </div>
              </div>
              <div className="upload-post">
                <button type="submit">Post</button>
              </div>
            </form>
          </div>
        </div>
        <div className="upload-right"></div>
      </div>
    </React.Fragment>
  );
}

export default UploadCenter;
