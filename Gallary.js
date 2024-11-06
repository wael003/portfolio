import React  from "react";
import "../index.css";
import IMAGES from "../Data/IMAGES";
import ImageShadow from "react-image-shadow";

const Gallary = ()=>{
    return(
        <div >
            {IMAGES.map(imageObj=>{
                return(<Image key={imageObj.id} src = {imageObj.image} desc = {imageObj.name}/>);
                
            })}
            
        </div>
    );

}
const Image = ({src,desc})=>{
    return(
        <div className="gallary">
            <a target="_blank" rel="noreferrer" href={src}>
            <ImageShadow src={src}/>
            </a>
            <p>{desc}</p>
        </div>
    );
}
export default Gallary;