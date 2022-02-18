import React from "react";
function NavLink( props ) {
   return ( 
        <a className="nav-link" href={ props.link } >
            { props.text }
        </a>
    )
}
export default NavLink