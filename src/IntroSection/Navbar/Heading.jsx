import React from "react";
function Heading( props ) {
    return (
        <h1 className="navbar-heading">
            { props.text }
        </h1>
    )
}
export default Heading