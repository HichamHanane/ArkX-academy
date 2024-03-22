import { useState } from "react";



function AddForm({posts , setPosts}) {
    
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    const add=()=>{
        console.log(title);
        let newPost={title,description};
        setPosts([...posts,newPost]);
    }
    return (
        <>
            <h1>Add new post :</h1>
            <div className="row">
                <input type="text" placeholder="Title" className="form-control w-25 col" onChange={(e)=> setTitle(e.target.value)}/>&nbsp;
                <input type="text" placeholder="Description" className="form-control w-25 col" onChange={(e)=> setDescription(e.target.value)}/>&nbsp;
                <button className="btn btn-secondary w-25" onClick={add}>Add</button>&nbsp;
            </div>
        </>
    )
}
export default AddForm;