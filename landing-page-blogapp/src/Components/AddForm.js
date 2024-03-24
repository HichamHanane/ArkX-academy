import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";



function AddForm({ blogTitle, menu, style, posts, setPosts, auth }) {
    let navigate = useNavigate()
    const schema = z.object({
        title: z.string().nonempty('title is required'),
        description: z.string().nonempty("description is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    const add = () => {
        console.log(title);
        let newPost = { title, description };
        setPosts([...posts, newPost]);
        navigate("/")
    }
    return (
        <>
            <Header blogTitle={"Blog App"} menu={menu} style={style} auth={auth} />
            <div className="container mt-4">
                <h1 >Add new post :</h1>
                <form onSubmit={handleSubmit(add)} className="" >
                    <input type="text" placeholder="Title" className="form-control w-25 col" {...register('title')} onChange={(e) => setTitle(e.target.value)} />&nbsp;
                    {errors.title && <p>{errors.title.message}</p>}
                    <input type="text" placeholder="Description" className="form-control w-25 col" {...register('description')} onChange={(e) => setDescription(e.target.value)} />&nbsp;
                    {errors.description && <p>{errors.description.message}</p>}
                    <br />
                    <button type="submit" className="btn btn-secondary w-25">Add</button>&nbsp;
                </form>
            </div>
        </>
    )
}
export default AddForm;