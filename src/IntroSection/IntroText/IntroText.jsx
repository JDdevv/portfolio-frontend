import React, { useEffect } from "react"
import Container from "../../SkillsSection/Container"
import Title from "./Title"
import Text from "./Text"
import { useState } from "react"
import "./IntroText.css"
function IntroText() {
    const [ animation , setAnimation ] = useState("")
    useEffect( () => {
        setAnimation("intro-text-animation")
    } , [])

    return (
        <Container classes={"intro-text " + animation }>
            <Title text="Who am i?"/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officiis consequuntur provident aut eligendi! Culpa dolorem autem voluptates fuga asperiores.</Text>
        </Container>
    )
 
}



export default IntroText