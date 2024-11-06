//import React  from "react";
import Profile from "./profile";
import Qualifications from "./Qualifications"
import Courses from "./Courses";
import "../index.css";
import Social from "./Social";
import Title from "./TitlesWithHooks";
import Amthal from "./Amthal";

function App(){
    const mystyle = {textAlign : "center"};
    return(
       <div style={mystyle} >
          <div className="row">
            
            <Title/>
            <div className="column">
                <Profile/>
            </div>
            <div className="column">
                <Qualifications/>
            </div>
            
          </div>
          <hr/>
            <Courses/>
        <hr/>
         <Social/>   
        </div> 
    );
}
export default App;