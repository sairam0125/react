// import React from "react";

// import Navbar from "./components/Navbar";

// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// import global from "./components/global.css"
// const App=()=>{
//     return(
//         <div className="app">
//             <Navbar/>
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar1></Sidebar1>
//                 <Sidebar2></Sidebar2>
//             </div>
//             <Footer/>
//         </div>
//     )
// }
// export default App;

// import React,{Component} from "react";
// import CBCPropex1 from "./propsexample/CBCPropex1";

// class App extends Component{
//     render(){
//         return(
//             <div>App
//                 <hr/>

//                 <CBCPropex1
//                 username="Sam"
//                 age={25}
//                 desig={["developer","tester"]}
//                 userDetails={{city:"hyd",area:"maisammaguda"}}
//                 sendFun={function(){alert("hi iam from parent component")}}
//                 />
//             </div>
//         )
//     }
// }
// export default App;

//! props

// import React,{Component} from "react";
// import FBCPropsex1 from "./propsexample/FBCPropsex1";

// const App=()=>{
//     return(
//         <div>
//             <FBCPropsex1
//             username="Sairam"
//             isLoggedIn={false}
//             hobbies={["reading","music","editing"]}
//             />
//         </div>
//     )
// }
// export default App;

//!props children example.
// import React from 'react'
// import PropsChildrenEx from './propsexample/Propschildrenex'
// import ChildProps from './propsexample/ChildProps'

// const App=()=>{
//     return(
//         <div>
//             <PropsChildrenEx username="Prashanth" company="google">
//                 <h1>this is data passed as props children</h1>
//                 <ChildProps/>
//             </PropsChildrenEx>
//         </div>
//     )
// }
// export default App;

//! cbc state 
// import React from 'react'
// import CBCStateex from './propsexample/CBCStateex'
// const App=()=>{
//     return(
//         <div>
//             <CBCStateex></CBCStateex>
//         </div>
//     )
// }
// export default App;

//! fbc state

import React from "react";
import FBCStateEx from "./propsexample/FBCStateEx";

const App=()=>{
    return(
        <div>
            <FBCStateEx></FBCStateEx>
        </div>
    )
}
export default App;