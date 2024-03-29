import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import PostIdPage from "./pages/PostIdPage";
import SignIn from "./pages/SignIn";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostIdPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
