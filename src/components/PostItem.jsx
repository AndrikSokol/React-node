import React from 'react'
import MyButton from './UI/button/MyButton';
import style from './PostItem.module.scss'
import pushPin from '../assets/red-pushpin.png'
const PostItem = ({post,removePost,number}) =>{

    return (
        <div className={style.PostItem}>
          <div>
            <img style={{width:'30px',objectFit:'cover'}}src ={pushPin} alt ='Красная канцелярская кнопка'></img>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </div>
          <div>
            <MyButton onClick = {() =>removePost(post)} >Удалить</MyButton>
          </div>
        </div>
    );
}

export default PostItem;