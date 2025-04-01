import React from "react";
 import "../../index.css";
 
 const Button = (props) => {
   const buttonClass = props.textOnly ? "text-button" : "button";
 
   return (
     <button className={buttonClass} onClick={props.onClick}>
       {props.children}
     </button>
   );
 };
 
 export default Button;