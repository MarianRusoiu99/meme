import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App"

import "./index.css"




// function good (name){
//     const date = new  Date();
//     const hours = date.getHours();
//     if( hours> 4 &&hours <12){
//         console.log("good morning " + name);
//     }
    
//     if( hours> 12 &&hours <17){
//         console.log("good afternoon " + name);
//     }
    
//     if( hours> 17 &&hours <20){
//         console.log("good evening " + name);
//     }
    
//     if( hours> 20 &&hours <4){
//         console.log("good night " + name);
//     }
// }
// good("bob");

 

const container = document.getElementById('root');
const root = createRoot(container); 



root.render(<App tab="home"/>);