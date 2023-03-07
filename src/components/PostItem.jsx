import React from 'react'
import MyButton from './UI/button/MyButton';
import style from './PostItem.module.scss'

const PostItem = ({post,removePost,number}) =>{

    return (
        <div className={style.PostItem}>
          <div>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.text}</p>
          </div>
          <div>
            <MyButton onClick = {() =>removePost(post)} >Удалить</MyButton>
          </div>
        </div>
    );
}

export default PostItem;