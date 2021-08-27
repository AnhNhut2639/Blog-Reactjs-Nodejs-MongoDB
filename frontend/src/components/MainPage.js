import React from "react";
import { useHistory } from "react-router-dom";

function MainPage(props) {
  let history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <React.Fragment>
      <div>Welcome to the Uniform Store {process.env.REACT_APP_MY_API_KEY}</div>
      <button onClick={handleClick}>Đăng Nhập</button>
    </React.Fragment>
  );
}

export default MainPage;
