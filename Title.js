
//  WORKING !!!!!!!

import { Component } from "react";
import React from "react";
import "../index.css"
// const Titles = ["a computer science","a football lover" ,"a superMan!!"];
const Titles = ["a developer", "a designer", "an engineer"];
class Title extends Component{
    constructor(){
        super();
        this.state = {titleIndex : 0 , titleState : false};
        
    }
    componentDidMount(){
        this.animateTitle();
        this.timeID = setTimeout(()=>{
            this.setState({titleState : true});
        }, 2000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
        clearTimeout(this.timeID);
    }
    animateTitle(){
        this.intervalId = setInterval(
            ()=>{
                const titleIndex = (this.state.titleIndex + 1) % Titles.length;
                this.setState({titleIndex, titleState : false});
                this.timeID = setTimeout(()=>{
                    this.setState({titleState : true});
                }, 2000)
            }
            ,4000);
    }
    render(){
        
        return (
           
                <p className={this.state.titleState ? "fade-out" : "fade-in"}>
                   i am {Titles[this.state.titleIndex]}
                </p>
            
        );
    }
    
}
export default Title;