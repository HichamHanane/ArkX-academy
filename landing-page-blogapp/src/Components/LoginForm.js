import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";



function LoginForm({users , setUsers , setAuth}) {
    const schema = z.object({
        email: z.string().nonempty('Email is required').email('Email format is not valid'),
        password: z.string().nonempty("password is required").min(8,'password must be at least 8 chara '),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [messageError , setError] =useState(false)
    let navigate = useNavigate()
    const login = ()=>{
        // props.setAuth(true)
        let findUser = users.find((u)=> u.email == email && u.password == password);
        if(!findUser){
            setError(true);
            return;
        }
        setAuth(true)
        navigate('/')
    }
    return (
        <div className="container mt-4">
            <h1>Log in :</h1>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder="Email..." className="form-control w-25 col" {...register('email')} onChange={(e)=> setEmail(e.target.value)}/>
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <input type="password" placeholder="Password..." className="form-control w-25 col" {...register('password')} onChange={(e)=> setPassword(e.target.value)}/>
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                <button className="btn btn-outline-info">Log in</button>
            </form>
            {
                messageError ? <p className="text-danger">Email or password incorrect !!!!</p> : null
            }
            <span>I don't have have an account </span><Link to="/signup">Sign up </Link>
        </div>
    )
}
export default LoginForm;