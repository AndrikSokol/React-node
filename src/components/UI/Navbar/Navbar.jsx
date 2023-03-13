import React from "react";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, setUser } = React.useContext(AuthContext);
  return (
    <div className={style.Navbar}>
      <div>
        <Link to="/about">О Сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
      {user && (
        <div>
          Привет, {user}
          <MyButton onClick={() => setUser(null)}>Выйти</MyButton>
        </div>
      )}
    </div>
  );
};

export default Navbar;
