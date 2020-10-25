import React, { Component } from 'react';

const Input = ({message, sendMessage, setMessage}) => {

    return(
        <div className="sndmsgposition">
        <input className="biginput" placeholder="Type Something...." value={message} onChange={(event) => setMessage(event.target.value)} 
         onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
         <button className="sendmsgbtn" onClick={(event) => sendMessage(event)}>Send</button>
         </div>
    )
}
export default Input;