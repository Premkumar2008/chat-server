import React, { Component } from 'react';


const Headbar = ({mobilenumber}) => {
return(
<div className="headbar">
<div className="chatroom_name">
<div className="onlinedot"></div><span>Chat Room</span>
</div>
<div className="close_chat">
<a href="/">Close</a>
</div>
</div>
)
}

export default Headbar;