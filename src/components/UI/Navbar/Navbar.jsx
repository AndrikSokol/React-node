import React from "react";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <Link to="/about">О Сайте</Link>
      <Link to="/posts">Посты</Link>
    </div>
  );
};

export default Navbar;
