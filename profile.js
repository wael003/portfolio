import React, { useState } from "react";
function Profile(){
    const mystyle = {textAlign : "center"};
    const mystyleB = {backgroundColor:"teal",padding : "10px" , color : "#eee" , border : "none" , cursor : "pointer"};
    const [bioState , setBioState] = useState(false);
    
    function toggel(){
        setBioState(!bioState);
        
    }
    return(
       <div style={mystyle}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s" alt="Profile"></img>
            <h4>Profile Picture</h4>
            <p>im programmer ingenear , im so hard working ! </p>
            {
                (!bioState) ? <button style={mystyleB} onClick={toggel}>Show more</button> 
                : 
                <div>
                    <p>my name is wael</p>
                    <p> i love play football</p>
                    <button onClick={toggel} style={mystyleB}>Show less</button>
                </div>
            }
       </div> 
    );
}
export default Profile; 