import React, { Component } from "react";

class CBCStateex extends Component{
    constructor(){
        super();
        this.state={
            username:"Sairam"
        };
    }
    changeName=()=>{
        this.setState({username:"Snehith"});
    }
    render(){
        console.log(this);
        return(
            <div>CBCStateEx
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Update the State</button>
            </div>
        )
    }
}

export default CBCStateex;