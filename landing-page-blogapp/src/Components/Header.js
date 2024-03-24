import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Header(props){
    let navigate= useNavigate()
    const login = ()=>{
        // props.setAuth(true)
        navigate('/login')
    }
    const logout = ()=>{
        props.setAuth(false)
    }
    return(
        <div className="header" style={{backgroundColor:props.style.backgroundColor , color:props.style.color}}>
            <div className="logo">
                <h1>{props.blogTitle}</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    {
                        props.menu.map((m,index)=>
                                <li key={index}><Link to={m.path}>{m.name}</Link> </li>

                        )
                    }
                </ul>
            </nav>
            {
                !props.auth ? <button className="btn btn-outline-info" onClick={login}>Login</button> : <button className="btn btn-outline-danger" onClick={logout}>logout</button>
            }
            
        </div>
    )
}
export default Header;