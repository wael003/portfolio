import React from "react";
// import course1 from "../assets/download.jpeg";
import "../index.css";
import data from "../Data/dataCourse";
const Courses = () =>{
    return(
        
        <div>
            
            <h1> My Courses</h1>
            <div>
                {
                data.map(course => {
                    return  <Cou key = {course.id} cou = {course}/>})
                    
                }
            </div>
        </div>

    );
}

const Cou = (props)=>{
    
    let {title,description,link,image}= props.cou;
    return(
        
        
            <div className="card">
                
                <img src={image} alt="course card"></img>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={()=>{
                    window.open(link,"_blank");
                }}>Enroll</button>
            </div>
    );
}
export default Courses;