import React from "react";
import "./TogglerButton.css"
function TogglerButton(props) {
    return ( 
        <div className="toggler-button" onClick={props.handler}>
            <span></span><span></span><span></span>
        </div>
    )
}
export default TogglerButton