import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";



function Home({blogTitle , menu , style , posts , setPosts , auth , setAuth}) {
    return (
        <div>
            <Header blogTitle={"Blog App"} menu={menu} style={style} auth={auth} setAuth={setAuth}/>
            <MainContent posts={posts} setPosts={setPosts} auth={auth}/>
            <Footer />
        </div>
    )
}

export default Home;