import { createContext, useContext, useEffect, useReducer, useState } from 'react';
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
import { date, set } from 'zod';

export const ThemeContext = createContext(
  {
    lightTheme: { background: "white", color: "black" },
    DarkTheme: { background: "black", color: "white" }
  }
)

function App() {
  let [loggedIn, setLoggedIn] = useState(false)
  let [isloading, setisLoading] = useState(true)
  let [menu_links, setMenu] = useState([
    { name: "Home", path: "/" },
    { name: "Add Post", path: "/newPost" }
  ])
  let [posts, setPosts] = useState([])
  let [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "rgb(38, 15, 59)",
    color: "white",
    fontSize: "1.5rem"
  })

  let [users, setUsers] = useState([
    { username: "hicham", email: "hicham@gmail.com", password: "hnn123456789" },
  ])

  let { lightTheme, DarkTheme } = useContext(ThemeContext)

  const fetchPosts = async () => {
    try {
      let fecth = await fetch("/getPosts");
      let data = await fecth.json();
      console.log(data);
      setPosts(data)
    }
    catch (err){
      console.log(err.message);
    }
    finally{
      setisLoading(false)
    }


    // .then(data => console.log(data))
  }

  useEffect(() => {
    fetchPosts();
  }, [])


  const reducer = (state, action) => {
    if (action.type == 'TOGGLE_THEME') {
      return state == DarkTheme ? lightTheme : DarkTheme
    }
  }
  let [theme, dispatch] = useReducer(reducer, DarkTheme)
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home blogTitle={"Blog App"} menu={menu_links} style={headerStyle} posts={posts} setPosts={setPosts} auth={loggedIn} setAuth={setLoggedIn} isLoading={isloading} />} />
          <Route path="/newPost" element={
            <ProtectedRoute auth={loggedIn}>
              <AddForm blogTitle={"Blog App"} menu={menu_links} style={headerStyle} posts={posts} setPosts={setPosts} auth={loggedIn} />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginForm users={users} setUsers={setUsers} auth={loggedIn} setAuth={setLoggedIn} />} />
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
{/* <Header blogTitle={"Blog App"} menu={menu_links} style={headerStyle} />
      <MainContent posts={posts} setPosts={setPosts}/>
      <Footer/> */}