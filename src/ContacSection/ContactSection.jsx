import React from "react";
import Form from "./Form";
import "./Contact.css"
import Divider from "./Divider";
import Title from "../IntroSection/IntroText/Title";
function ContactSection() {
    return(
        <section id="contact" className="contact-section">
            <Divider />
            <Title text="Contact Me" />
            <Form/>
        </section>
    )
}
export default ContactSection