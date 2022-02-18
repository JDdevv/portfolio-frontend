import React from "react";
import Logo from "./Logo";
import Title from "../IntroSection/IntroText/Title";
import Container from "./Container";
import Text from "../IntroSection/IntroText/Text";
import "./skills.css"
import SmallHeading from "./SmallHeading";
function SkillsSection() {
    return ( 
        <section id="skills" className="skills-section">
            <Title text="My skills" />
            <Container classes="skill-container rigth-transition-initial" animation="rigth-transition">
                <Logo image="./logonode.png" alt="nodejs logo"/>
                <SmallHeading text="Node" />
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed placeat, autem nihil quos aspernatur voluptates nemo? Eveniet, excepturi sed!
                </Text>
            </Container>
            <Container classes="skill-container ">
                <Logo image="./logoreact.png" alt="nodejs logo"/>
                <SmallHeading text="React" />
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed placeat, autem nihil quos aspernatur voluptates nemo? Eveniet, excepturi sed!
                </Text>
            </Container>
            <Container classes="skill-container">
                <Logo image="./logocss.png" alt="nodejs logo"/>
                <SmallHeading text="CSS" />
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed placeat, autem nihil quos aspernatur voluptates nemo? Eveniet, excepturi sed!
                </Text>
            </Container>

        </section>
    )
}
export default SkillsSection