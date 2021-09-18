import React, { useState } from "react";
import Story from "./Story";
import InputEmoji from "react-input-emoji";

function MiddleColumn(props) {
  const [cmt, setCmt] = useState("");

  return (
    <React.Fragment>
      <div className="middle-column">
        <Story />
        <div className="news-feed">
          <div className="info-feed">
            <div className="logo-feed">
              <img src="./her.png" alt="Logo" />
            </div>
            <div className="info-news">
              <div className="own-news">Lebron James</div>
              <div className="where-news">LA Lakers</div>
            </div>
            <div className="option-feed">
              <div className="option">...</div>
            </div>
          </div>
          <div className="content-feed">
            <div className="content-feed-img">
              <img src="/her.png" alt="Tom hid" />
            </div>
            <div className="like-cmt-shr">
              <div className="icon-like-share-cmt">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  class="svg-inline--fa fa-heart fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="comment"
                  class="svg-inline--fa fa-comment fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                  ></path>
                </svg>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="paper-plane"
                  class="svg-inline--fa fa-paper-plane fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="like-count">1,476,083 likes</div>
          <div className="status-dayPost">
            <div className="status">
              {" "}
              <span>Lebron James:</span> Sự trẻ trung là ở việc bạn sống sôi nổi
              như thế nào, Chứ không phải là bạn sinh ra khi nào{" "}
            </div>
            <div className="dayPost">1 DAY AGO</div>
          </div>
          <div className="commentary">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="audio-description"
              class="svg-inline--fa fa-audio-description fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"
              ></path>
            </svg>
            <InputEmoji
              value={cmt}
              onChange={setCmt}
              // onEnter={handleOnEnter}
              // cleanOnEnter
              // maxLength="20"
              placeholder="Type a comment"
            />
            <span>Post</span>
          </div>
        </div>

        {/*  */}
        <div className="news-feed">
          <div className="info-feed">
            <div className="logo-feed">
              <img src="./her.png" alt="Logo" />
            </div>
            <div className="info-news">
              <div className="own-news">Lebron James</div>
              <div className="where-news">LA Lakers</div>
            </div>
            <div className="option-feed">
              <div className="option">...</div>
            </div>
          </div>
          <div className="content-feed">
            <div className="content-feed-img">
              <img src="/her.png" alt="Tom hid" />
            </div>
            <div className="like-cmt-shr">
              <div className="icon-like-share-cmt">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  class="svg-inline--fa fa-heart fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="comment"
                  class="svg-inline--fa fa-comment fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                  ></path>
                </svg>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="paper-plane"
                  class="svg-inline--fa fa-paper-plane fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="like-count">1,476,083 likes</div>
          <div className="status-dayPost">
            <div className="status">
              {" "}
              <span>Lebron James:</span> Sự trẻ trung là ở việc bạn sống sôi nổi
              như thế nào, Chứ không phải là bạn sinh ra khi nào{" "}
            </div>
            <div className="dayPost">1 DAY AGO</div>
          </div>
          <div className="commentary">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="audio-description"
              class="svg-inline--fa fa-audio-description fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"
              ></path>
            </svg>
            <InputEmoji
              value={cmt}
              onChange={setCmt}
              // onEnter={handleOnEnter}
              // cleanOnEnter
              // maxLength="20"
              placeholder="Type a comment"
            />
            <span>Post</span>
          </div>
        </div>

        {/*  */}
      </div>
    </React.Fragment>
  );
}

export default MiddleColumn;
