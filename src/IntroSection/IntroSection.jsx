import React from "react";
import Navbar from "./Navbar/Navbar";
import IntroText from "./IntroText/IntroText";
import "./IntroSection.css"
import Background from "./Background/Background";
function IntroSection() {
    return ( 
        <section id="#home" className="intro-section">
            <Navbar />
            <IntroText />
            <Background />
        </section>
    )
}
export default IntroSection