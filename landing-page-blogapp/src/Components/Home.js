import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import ThemeSwitcher from "./ThemeSwitcher";



function Home({ blogTitle, menu, style, posts, setPosts, auth, setAuth }) {
    return (
        <>
            <div style={{display:"flex" ,justifyContent:"end"}}>
                <ThemeSwitcher />
            </div>
            <div>
                <Header blogTitle={"Blog App"} menu={menu} style={style} auth={auth} setAuth={setAuth} />
                {/* <hr /> */}
                <MainContent posts={posts} setPosts={setPosts} auth={auth} />
                {/* <hr /> */}
                <Footer />
            </div>
        </>
    )
}

export default Home;