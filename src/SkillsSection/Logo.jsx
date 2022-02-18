import React from "react";
function Logo( props ) {
    return ( 
        <img className="logo" alt={props.alt} src={ props.image } />
    )
}
export default Logo