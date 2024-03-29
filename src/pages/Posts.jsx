import React from "react";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/myModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import { usePaginations } from "../hooks/usePaginations";
import SwitchPages from "../components/SwitchPages";
import style from "./Posts.module.scss";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const [modal, setModal] = React.useState("");
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(page, limit);
    setPosts(response.data);
    const totalCount = await response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const pagesArray = getPagesArray(totalPages);

  React.useEffect(() => {
    fetchPosts();
  }, [page]);

  // const pagesArray = usePaginations(totalPages);

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((obj) => obj.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className={style.Posts}>
        <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Ошибка загрузки ${postError}</h1>}
        {isPostsLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader />
          </div>
        ) : (
          <div>
            <SwitchPages
              totalPages={totalPages}
              pagesArray={pagesArray}
              changePage={changePage}
              page={page}
            />
            ,
            <PostList
              posts={sortedAndSearchedPosts}
              title="Посты"
              removePost={removePost}
            />
            ,
            <SwitchPages
              totalPages={totalPages}
              pagesArray={pagesArray}
              changePage={changePage}
              page={page}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;
