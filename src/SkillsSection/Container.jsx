import React, { useEffect } from "react";
import { useState } from "react";
function Container( props ) {
    const classes = props.classes || ""
    const [ animation , setAnimation ] = useState("")
    useEffect(() => {
        setAnimation(props.animation || "")
    },[props.animation])

    return ( 
        <div className={"container "+ classes + " " + animation}>
            { props.children }
        </div>
    )
}
export default Container