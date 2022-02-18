import React, { useEffect } from "react";
import { useState } from "react";
import "./NavLinks.css"
function NavLinks( props ) {
    const [ animation , setAnimation ] = useState("")
    useEffect( () => {
        setAnimation(props.animation)
    },[props.animation])
    return ( 
        <div className={"nav-links-container "+animation}>
            <ul className={"nav-links "+props.animation}>
                {props.children}
            </ul>
        </div>
   )
}
export default NavLinks