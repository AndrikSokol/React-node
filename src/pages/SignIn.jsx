import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../providers/AuthProvider";
import style from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = React.useState("");

  const navigate = useNavigate();
  return (
    <div className={style.SignIn}>
      <MyInput
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></MyInput>
      <MyButton
        onClick={() => {
          navigate("/Posts");
          setUser(name);
        }}
      >
        Войти
      </MyButton>
    </div>
  );
};

export default SignIn;
