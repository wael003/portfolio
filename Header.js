import React from "react";
import "../index.css"
import { Link } from "react-router-dom";
const Header = ()=>{
    const Style = { margin : 10 , marginBottom : 30 , textAlign : "center" };
    return(  
        <div className="header">
            <h3 style={Style}>
                <Link className="link" to="/">Home</Link>
            </h3>
            <h3 style={Style}>
                <Link className="link" to="/Amthal">Amthal</Link>
            </h3>
            <h3 style={Style}>
                <Link className="link" to="/Gallary">Gallary</Link>
            </h3>
        </div>
     );
}
export default Header;