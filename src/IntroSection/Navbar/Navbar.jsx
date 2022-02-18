import React, { useEffect,} from "react";
import NavLinks from "./NavLinks/NavLinks";
import Heading from "./Heading";
import NavButton from "./NavLinks/NavButton";
import NavLink from "./NavLinks/NavLink";
import "./Navbar.css"
import { useState } from "react";
import TogglerButton from "./TogglerButton"
function Navbar( props ) {
    const [ animation , setAnimation ] = useState("")
    const [ width , setWidth ] = useState(window.innerWidth)
    const [ renderingNavLinks , setRenderingNavLinks ] = useState(false)
    const [ menuAnimation , setMenuAnimation ] = useState("nav-links-animation")
    function toggleLinks() {
        if( renderingNavLinks ) {
            setMenuAnimation("")
            setTimeout(()=>setRenderingNavLinks(false),500)
        } else {
            setMenuAnimation("nav-links-animation")
            setRenderingNavLinks(true)
        }
    }
    useEffect( () => {
        setAnimation("navbar-animation")
        window.addEventListener("resize" , ( e ) => {
            setWidth(window.innerWidth)
        })
        return window.removeEventListener("resize",[])
    },[])
    return (
      <nav className={"navbar "+ animation } >
            <Heading text="Agustin Castro"/>

            { width < 750 && <TogglerButton handler={toggleLinks}/>}
            { (width > 750 || renderingNavLinks) &&
                <NavLinks animation={menuAnimation}>
                    <NavButton>
                        <NavLink text="Home" link="#home" />
                    </NavButton>
                    <NavButton>
                        <NavLink text="My Skills" link="#skills" />
                    </NavButton>
                    <NavButton>
                        <NavLink text="My Projects" link="#projects" />
                    </NavButton>
                    <NavButton>
                        <NavLink text="Contact Me" link="#contact" />
                    </NavButton>
                </NavLinks>
                
            }
        </nav>
    )
}
export default Navbar