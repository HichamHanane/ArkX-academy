import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {
  let [menu_links,setMenu] =useState([
    {name:"Home"},
    {name:"Posts"},
    {name:"Add Post"}
  ])
  let [posts,setPosts] = useState([
    {title:"MongoDB" , description:"description.............."},
    {title:"React js" , description:"description.............."},
    {title:"Next js" , description:"description.............."},
    {title:"Node js" , description:"description.............."},
  ])
  let [headerStyle,setHeaderStyle]=useState({
    backgroundColor:"rgb(38, 15, 59)",
    color:"white",
    fontSize:"1.5rem"
  })
  return (
    <div className="App">
      <Header blogTitle={"Blog App"} menu={menu_links} style={headerStyle} />
      <MainContent posts={posts} setPosts={setPosts}/>
      <Footer/>
    </div>
  );
}

export default App;
