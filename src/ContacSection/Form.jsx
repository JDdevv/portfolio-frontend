import React, { useState } from "react";
function Form() {
    const [ nameInput , setNameInput ] = useState("")
    const [ emailInput , setEmailInput ] = useState("")
    const [ messageInput , setMessageInput ] = useState("")
    function handleChange( e ) {
        const { name , value } = e.target
        if ( name === "name" ) setNameInput( value ) 
        if ( name === "email" ) setEmailInput( value ) 
        if ( name === "name" ) setMessageInput( value ) 
    }
        
    return ( 
        <form className="contact-form">
            <input onChange={e => setNameInput(e.target.value)} value={nameInput} placeholder="Name"/>
            <input onChange={e => setEmailInput( e.target.value)} value={emailInput} placeholder="Email"/>
            <textarea onChange={e => setMessageInput( e.target.value)} value={messageInput} placeholder="Message"/>
            <button>Send</button>
        </form>
    )
}
export default Form