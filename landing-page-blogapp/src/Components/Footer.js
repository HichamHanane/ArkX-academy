import { useContext } from "react";
import { ThemeContext } from "../App";



function Footer(){
    let {theme} = useContext(ThemeContext)
    return(
        <div className="footer" style={{backgroundColor:theme.background}}>
            <div className="logo" >
                <h1>BlogApp</h1>
            </div>
            <nav className="nav-links">

            </nav>
        </div>
    )
}
export default Footer;