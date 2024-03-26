import { useContext } from "react";
import { ThemeContext } from "../App";



function ThemeSwitcher(){
    let {toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <button className="btn btn-warning btn-sm" onClick={toggleTheme}>Switch</button>
        </div>
    )
}
export default ThemeSwitcher;