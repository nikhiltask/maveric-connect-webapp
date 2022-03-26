import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './Pages/HomePage/HomePage';
import Signup from './Components/signup/Signup';
import Post from './Components/Post/Post';
import PostComponent from './Components/Post/PostComponent';
import PostDetail from './Components/PostDetails/PostDetails';

function App() {
  return (
    // <PostComponent/>
    <Router>
    
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/Post" element={ <Post /> } />
        <Route path="/Postlike" element={ <PostComponent /> } />
        <Route path="/PostDetails" element={ <PostDetail /> } />
        
      </Routes>
    </Router>
  );
}

export default App;