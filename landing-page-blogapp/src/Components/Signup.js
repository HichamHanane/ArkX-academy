import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';



function Signup({users , setUsers}) {
    const schema = z.object({
        username: z.string().nonempty('username is required'),
        email: z.string().nonempty('Email is required').email('Email format is not valid'),
        password: z.string().nonempty("password is required").min(8, 'password must be at least 8 chara '),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    let navigate = useNavigate()
    let [email, setEmail] = useState("");
    let [username, sertUsername] = useState("");
    let [password, setPassword] = useState("");

    const signup = ()=>{
        let newUser = {username , email , password};
        setUsers([...users,newUser]);
        navigate('/login');
    }
    return (
        <div className="container mt-4">
            <h1>Sign up :</h1><br />
            <form onSubmit={handleSubmit(signup)}>
                <input type="text" placeholder="Username..." className="form-control w-25 col" {...register('username')} onChange={(e) => sertUsername(e.target.value)} />
                {errors.username && <p>{errors.username.message}</p>}

                <br />
                <input type="text" placeholder="Email..." className="form-control w-25 col" {...register('email')} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p>{errors.email.message}</p>}

                <br />
                <input type="password" placeholder="Password..." className="form-control w-25 col" {...register('password')} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                <button className="btn btn-outline-info" type="submit">Log in</button>
            </form>
            <br />
            <span>Already have an account ?</span><Link to="/login">Log in</Link>
        </div>
    )
}
export default Signup;