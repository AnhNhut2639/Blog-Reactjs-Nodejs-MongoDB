import React, { useState } from "react";

function UploadCenter(props) {
  const [imgBg, setImgBg] = useState("");

  const getImgStatus = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgBg("/" + e.target.files[0].name);
    }
  };

  return (
    <React.Fragment>
      <div className="new-upload">
        <div className="upload-left"></div>
        <div className="upload-center">
          <div
            className="my-upload"
            style={{
              backgroundImage: `url("/macbook.jpg")`,
            }}
          >
            <form action="hello">
              <div className="upload-content">
                <div className="content-image">
                  <div
                    className="display-image"
                    id="display_image"
                    style={{
                      backgroundImage: `url(${imgBg})`,
                    }}
                  ></div>
                  <div className="content-input">
                    <input
                      type="file"
                      className="form-control-file"
                      name="imagePost"
                      id="image_input"
                      accept="image/png, image/jpg"
                      onChange={getImgStatus}
                    />
                  </div>
                </div>
                <div className="content-main">
                  <textarea
                    name="mytextarea"
                    id="textarea"
                    placeholder="Nhập tin nhắn ......."
                  ></textarea>
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
