import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Components/Home';
import ReadPost from './Components/post/postpage';
import Login from './Components/loginSignup/login';
import Signup from './Components/loginSignup/signup';
import AllPost from './Components/post/AllPosts';
import AddPost from './Components/post/addpost';
import EditPost from './Components/post/editpost';

function App() {
  return (
    <Router>
     <NavigationBar />
     <Routes>
       <Route path="/" element={ <HomePage/> } />
       <Route path="/post/:id" element={ <ReadPost /> } />
       <Route path="/login" element={ <Login /> } />
       <Route path="/signup" element={ <Signup /> } />
       <Route path="/allpost" element={ <AllPost /> } />
       <Route path="/addpost" element={ <AddPost /> } />
       <Route path="/editpost/:id" element={ <EditPost /> } />
     </Routes>
    </Router>
  );
}

export default App;
