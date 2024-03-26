import { useContext, useState } from "react";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import { ThemeContext } from "../App";



function MainContent({ posts, setPosts, auth }) {
    // console.log(props.posts.length);
    let [addPost, SetAddPost] = useState(true);
    let [indexUpdated, setIndex] = useState();
    // let [updatedPost , setUpdatedPost]=useState()
    const update = (i) => {
        SetAddPost(false)
        setIndex(i)
    }
    const del = (i) => {
        let filterPosts = posts.filter((p, index) => index != i);
        setPosts(filterPosts);
    }
     let {theme} = useContext(ThemeContext)
    return (
        <div className="content " style={{backgroundColor:theme.background , color:theme.color, width:"100"}}>
            <h1>Welcom To my blog app</h1>
            {
                posts.length != 0 ?
                    <table className="table table-bordered">
                        <tr className="bg-secondary">
                            <th className="p-2">Title</th>
                            <th className="p-2">ID</th>
                            <th className="p-2">Description</th>
                            <th></th>
                            <th></th>

                        </tr>
                        {
                            posts.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{p.title}</td>
                                        <td>{p.description}</td>
                                        <td>
                                            {
                                                auth ? <button className="btn btn-primary" onClick={() => update(index)}>Update</button> : null
                                            }
                                        </td>
                                        <td>
                                            {

                                                auth ? <button className="btn btn-danger" onClick={() => del(index)}>Delete</button> : null 
                                            }

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    : <div style={{ textAlign: "center", color: "red", marginTop: "100px" }}>
                        <h5>No posts available</h5>
                    </div>
            }
            <br /><br />
            {
                addPost ? null : <UpdateForm posts={posts} setAddPost={SetAddPost} index={indexUpdated} />
            }

        </div>
    )
}
export default MainContent;
