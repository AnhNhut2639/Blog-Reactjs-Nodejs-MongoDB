import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import { FaIcons } from "react-icons/fa";
import axios from "axios";

function Comment(props) {
  const { id } = props; // idPost
  const [showPicker, setShowPicker] = useState(false);
  const [cmt, setCmt] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setCmt(cmt + emojiObject.emoji);
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        setShowPicker(false);
      }
    });
  });
  const handlePostCmt = () => {
    if (cmt === "") {
      alert("Nhập nội dung bình luận");
      return;
    } else {
      axios.post(
        "http://localhost:3001/user/cmt",
        {
          idPost: id,
          content: cmt,
        },
        { withCredentials: true }
      );
      setCmt("");
    }
  };

  const handleOnchange = (e) => {
    const val = e.target.value;
    setCmt(val);
  };
  const handleOff = () => {
    setShowPicker(false);
  };

  return (
    <React.Fragment>
      <FaIcons
        className="faIcon"
        onClick={() => setShowPicker((val) => !val)}
      />
      <input
        type="text"
        value={cmt}
        className="input-style"
        onChange={handleOnchange}
        placeholder="Add a comment..."
        onClick={handleOff}
      />
      {showPicker && (
        <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
      )}
      <button
        disabled={cmt > 0 ? false : true}
        onClick={() => handlePostCmt(id)}
      >
        post
      </button>
    </React.Fragment>
  );
}

export default Comment;
