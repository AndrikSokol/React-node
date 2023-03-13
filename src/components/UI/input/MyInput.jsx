import React from "react";
import style from "./MyInput.module.scss";

const MyInput = ({ children, ...props }) => {
  return (
    <input {...props} className={style}>
      {children}
    </input>
  );
};

export default MyInput;
