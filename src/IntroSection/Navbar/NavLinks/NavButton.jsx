import React from "react";
function NavButton( props ) {
    return ( 
        <li className="nav-button nav-button-animation">
            { props.children }
        </li>
    )
}
export default NavButton