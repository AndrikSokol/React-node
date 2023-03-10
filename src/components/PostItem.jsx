import React from "react";
import MyButton from "./UI/button/MyButton";
import style from "./PostItem.module.scss";
import pushPin from "../assets/red-pushpin.png";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, removePost, number }) => {
  const navigate = useNavigate();

  return (
    <div className={style.PostItem}>
      <div>
        <img
          style={{ width: "30px", objectFit: "cover" }}
          src={pushPin}
          alt="Красная канцелярская кнопка"
        ></img>
        <h3>
          {number}. {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
      <div>
        <div>
          <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
            Открыть
          </MyButton>
        </div>
        <div>
          <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
