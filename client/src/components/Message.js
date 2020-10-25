import React, { Component } from 'react';

const Message = ({message, customername}) => {
let sentByCurrentUser = false;
const trimmedname = message.user && message.user.trim().toLowerCase();

if(message.user === (customername && customername.trim().toLowerCase()) ){
    sentByCurrentUser = true;
}
return (
   
    sentByCurrentUser 
    ? 
    (
        <div className="messageContainer mright">
        <div className="message_box bg-maincolor">
        <p className="message_textin">{message.text}</p>
        </div>
        <div className="clearfix"></div>
        </div>
    )
     :
        (
            <div className="messageContainer mrleft">
           
            <div className="message_box bg-seccolor">
            <p className="message_textin">{message.text}</p>
            </div>
            <div className="clearfix"></div>
            </div>
        )
        
    
);
}

export default Message;