import { BrowserRouter, Link, Route,Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Posts from './pages/Posts'
import Error from './pages/Error'

const App = () => {

  return (
    <div className='App'>
      <header>
        <Link to ='/about'>О Сайте</Link>
        <Link to='/posts'>Посты</Link>
      </header> 
      <Routes>
        <Route path="about" element={ <About/>}/>
        <Route path="posts" element={ <Posts/>}/>
        <Route path="*" element={ <Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
