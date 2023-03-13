import React from "react";
import style from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={style["MyButton"]}>
      {children}
    </button>
  );
};

export default MyButton;
