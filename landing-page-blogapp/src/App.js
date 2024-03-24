import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import AddForm from './Components/AddForm';
import ProtectedRoute from './Components/ProtectedRoute';
import LoginForm from './Components/LoginForm';
import Signup from './Components/Signup';

function App() {
  let [loggedIn, setLoggedIn] = useState(false)
  let [menu_links, setMenu] = useState([
    { name: "Home", path: "/" },
    { name: "Add Post", path: "/newPost" }
  ])
  let [posts, setPosts] = useState([
    { title: "MongoDB", description: "description.............." },
    { title: "React js", description: "description.............." },
    { title: "Next js", description: "description.............." },
    { title: "Node js", description: "description.............." },
  ])
  let [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "rgb(38, 15, 59)",
    color: "white",
    fontSize: "1.5rem"
  })

  let [users,setUsers]=useState([
    {username:"hicham",email:"hicham@gmail.com" , password:"hnn123456789"},
  ])
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home blogTitle={"Blog App"} menu={menu_links} style={headerStyle} posts={posts} setPosts={setPosts} auth={loggedIn} setAuth={setLoggedIn} />} />
        <Route path="/newPost" element={
          <ProtectedRoute auth={loggedIn}>
            <AddForm blogTitle={"Blog App"} menu={menu_links} style={headerStyle} posts={posts} setPosts={setPosts} auth={loggedIn} />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginForm users={users} setUsers={setUsers} auth={loggedIn} setAuth={setLoggedIn}/>}/>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers}/>} />
      </Routes>
    </div>
  );
}

export default App;
{/* <Header blogTitle={"Blog App"} menu={menu_links} style={headerStyle} />
      <MainContent posts={posts} setPosts={setPosts}/>
      <Footer/> */}