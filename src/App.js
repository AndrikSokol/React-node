import './App.scss';
import React from 'react';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios'


const App = () => {

 
  const [posts,setPosts] = React.useState();
  const [filter,setFilter] = React.useState({sort:'',query:''})
  const [modal,setModal] = React.useState('')
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);



 
  const createPost = (newPost) =>{
    setPosts(prev => [...prev, newPost]);
    setModal(false)
  }

  const removePost =(post)=>{
    setPosts(posts.filter(obj=> obj.id !== post.id))
  }

  // async function fetchData() {
  //   // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   // console.log(response.data)
  // }
  return (  
    <>
    <header></header>
    <div className='App'>
      {/* <MyButton onClick ={fetchData}>
        a
      </MyButton> */}
      <MyButton onClick ={()=>setModal(true)}>Создать пост</MyButton>
      <MyModal visible = {modal} setVisible ={setModal}>
        <PostForm  create = {createPost}/>
      </MyModal>
         
      <PostFilter 
        filter = {filter} 
        setFilter = {setFilter}
      />
      <PostList 
        posts = {sortedAndSearchedPosts} 
        title = 'Посты' 
        removePost = {removePost}
      />
      </div>
    </>
  );
}

export default App;
