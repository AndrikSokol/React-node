import React from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) =>{
    const [post ,setPost] = React.useState({title: '' , body:''})
    const [errorMsg, setErrorMsg] = React.useState('')
    
  const addNewPost = (event) =>{
    event.preventDefault();
    if(!post.title.length || !post.body.length){
      setErrorMsg('Нельзя добавить пустой пост') 
      return 
    }
    setErrorMsg('');
    const newPost ={...post, id:Date.now()};
    create(newPost)
    setPost({title: '' , body:''})
  }

  return (
    <form style={{  display: 'flex', flexDirection: 'column'}}>
    <MyInput 
        placeholder='Заголовок поста'
        onChange={event =>setPost({...post,title:event.target.value})} 
        value ={post.title}
      >
      </MyInput>
      <MyInput 
        placeholder='Текст поста'
        onChange={event =>setPost({...post,body:event.target.value})}
        value ={post.body}
      >
      </MyInput>
      <div>
        <MyButton onClick ={addNewPost}>добавить пост</MyButton>
        <a style ={{color:'red' ,marginLeft: '10px'}}>{errorMsg}</a>
      </div>
      </form>
  )
}

export default PostForm;
