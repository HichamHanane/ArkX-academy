import { useState } from "react";



function UpdateForm({posts , setAddPost , index}){
    let targetTitle = posts[index].title;
    let targetDescription = posts[index].description;
    let [title,setTitle]=useState(targetTitle);
    let [description,setDescription]=useState(targetDescription);

    const edit=()=>{
        let updatedPost={title,description};
        // console.log(index);
        posts.splice(index,1,updatedPost);
        setAddPost(true)
    }
    return(
        <div>
            <h1> Update Post : </h1>
            <div className="row">
                <input type="text" placeholder="Title" className="form-control w-25 col" onChange={(e)=> setTitle(e.target.value)} defaultValue={targetTitle} required/>&nbsp;
                <input type="text" placeholder="Description" className="form-control w-25 col" onChange={(e)=> setDescription(e.target.value)} defaultValue={targetDescription} required/>&nbsp;
                <button className="btn btn-secondary w-25" onClick={edit}>Update</button>&nbsp;
                <button className="btn btn-success w-25" onClick={()=> setAddPost(true)}>Cancel</button>&nbsp;
            </div>
        </div>
    )
}
export default UpdateForm;