import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { Loader } from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching' 
import style from './PostIdPage.module.scss'

const PostIdPage = () => {
  const {id} = useParams()
  const[post,setPost] = React.useState({});
  const[comments,setComments] = React.useState([]);
  
  const[fetchPost,isPostLoading,postError]  = useFetching(async ()=>{
    const response = await PostService.getById(id);
    setPost(response.data)
  })

  const[fetchComments,isComLoading,comError]  = useFetching(async ()=>{
    const response = await PostService.getCommentsById(id);
    setComments(response.data)
  })
    
  React.useEffect (()=>{
    fetchPost(id)
    fetchComments(id)
  },[])


    return (
    <div className = {style.PostIdPage}>
      {postError &&
        <h1>Ошибка загрузки ${postError}</h1>
      }
      {isPostLoading 
      ? <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Loader/></div>
      : <div className={style.PostItem}>
          <div>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      }
      {comError &&
        <h1>Ошибка загрузки ${comError}</h1>
      }
      {isComLoading 
      ?<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Loader/></div>
      :<>
        <h2 style={{display:'flex',alignItems:'center',justifyContent:'center',borderBottom:'1px solid white',paddingBottom:'5px'}}>Комментарии</h2>
        <div className = {style.Comments}>
        {comments.map((com,index)=>{
              return(
              <div key= {com.id}>
                <h3>{index+1}. {com.name} | Email: {com.email}</h3>
                <p>{com.body}</p>
              </div>
              )
            })}
        </div>
        </>
      }
    </div>
  );
}

export default PostIdPage;