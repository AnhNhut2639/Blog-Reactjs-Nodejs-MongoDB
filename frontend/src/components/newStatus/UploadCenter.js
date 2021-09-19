import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

function UploadCenter(props) {
  // const [imgBg, setImgBg] = useState("");
  const [text, setText] = useState("");
  const [previewFile, setPreviewFile] = useState();

  const getImgStatus = (e) => {
    const file = e.target.files[0];
    console.log(file);
    previewFileFunc(file);
  };

  const previewFileFunc = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewFile(reader.result);
    };
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
            <form action="hello">
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
                  {/* <textarea
                    name="mytextarea"
                    id="textarea"
                    placeholder="Nhập tin nhắn ......."
                  ></textarea> */}
                  <InputEmoji
                    value={text}
                    onChange={setText}
                    // onEnter={handleOnEnter}
                    // cleanOnEnter
                    // maxLength="20"
                    placeholder="Type a message"
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
