import React, { useEffect, useState } from "react";
import "../index.css";
const Titles = ["a developer", "a designer", "an engineer"];
const TitlesWithHooks = ()=>{

    const [titleIndex  , setTitleIndex] = useState(0);
    const [titleState , setTitleState]  = useState(false);

    useEffect(()=>{
        let intervalID = null;
        let timeOutID = null;

        intervalID = setInterval(
            ()=>{
                const Index = (titleIndex + 1) % Titles.length;
                //this.setState({titleIndex, titleState : false});
                setTitleIndex(Index);
                setTitleState(false);
                timeOutID = setTimeout(()=>{
                    // this.setState({titleState : true});
                    setTitleState(true);
                }, 2000)
            }
            ,4000);

            
        timeOutID = setTimeout(()=>{
            // this.setState({titleState : true});
            setTitleState(true);
        }, 2000)

         function cleanup(){
            clearInterval(intervalID);
            clearTimeout(timeOutID);
        }
    },[titleIndex]);
        


    

    return (
           
        <p className={titleState ? "fade-out" : "fade-in"}>
           i am {Titles[titleIndex]}
        </p>
    
);
}
export default TitlesWithHooks;