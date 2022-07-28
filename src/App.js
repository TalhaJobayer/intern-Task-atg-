import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MainPage from './Component/MainPage/MainPage';
import Post from './Component/MainPage/Post/Post';

function App() {
  return (
    <div >
      <Navbar></Navbar>
     <MainPage></MainPage>
     <Post></Post>
    </div>
  );
}

export default App;
