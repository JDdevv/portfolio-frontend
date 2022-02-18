import React from "react";
function Text( props ) {
    return ( 
        <p className="text">
            { props.children || props.text}
        </p>
    )
}
export default Text