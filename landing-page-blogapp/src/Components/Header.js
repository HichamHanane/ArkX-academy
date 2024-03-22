import { useState } from "react";



function Header(props){
    let [isLogged,setIsLogged]=useState(true);
    const login = ()=>{
        setIsLogged(false)
        console.log('hello');
    }
    const logout = ()=>{
        setIsLogged(true)
        console.log('hello');
    }
    return(
        <div className="header" style={{backgroundColor:props.style.backgroundColor , color:props.style.color}}>
            <div className="logo">
                <h1>{props.blogTitle}</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    {
                        props.menu.map((m,index)=>{
                            return(
                                <li key={index}>{m.name}</li>
                            )
                        })
                    }
                </ul>
            </nav>
            {
                isLogged ? <button className="btn btn-outline-info" onClick={login}>Login</button> : <button className="btn btn-outline-danger" onClick={logout}>logout</button>
            }
            
        </div>
    )
}
export default Header;