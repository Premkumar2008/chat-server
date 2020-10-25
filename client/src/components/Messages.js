import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';


const Messages = ({ messages, customername, itemsordered }) => {

	return (
		<ScrollToBottom>
			{ messages.length > 0 && 
				messages.map((message, i) => 
				<div key={i} ><Message message={message} customername={customername} itemsordered={itemsordered}/></div>)
			}
			{ messages.length === 0 && <div>Loading ...</div>}
		</ScrollToBottom>
	)
}
export default Messages;