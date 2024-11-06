import React ,{ Component } from "react";
import { json } from "react-router-dom";

class Amthal extends Component{
    constructor(){
        super();

        this.state = {randomMathal : {}};

        this.data = null;
    }

     componentDidMount(){
        fetch("../Data/index.json").then(res=>res.json()).then(json => this.state.setState({randomMathal : json }));
    }

    render(){
        return(
            <div>
                {console.log(this.state.randomMathal.title)}
                <h1>Amthal</h1>
                <p>{this.state.randomMathal.title}</p>
            </div>

        );
    
    
    }

}
export default Amthal;