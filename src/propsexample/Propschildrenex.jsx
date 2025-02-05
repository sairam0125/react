import React from "react";


const Propschildrenex=(props)=>{
    console.log(props);
    return(
        <div>Propschildrenex 
            <hr/>
            <h1>{props.username}</h1>
            <h1>{props.company}</h1>
            {
                props.children[0]
            }
        </div>
    )
}
export default Propschildrenex;