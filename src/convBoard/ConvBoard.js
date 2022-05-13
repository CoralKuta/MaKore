import './ConvBoard.css';
import React from 'react';
import Message from '../message/Message'
//conversation component that display the conversion on the chat
function ConvBoard(props) {
  //console.log(props.messageList)
  return (
    <div id="another-wrap">
      <div id ="messages-wrap" className="chat-background d-flex flex-column align-items-start">
        {props.messageList}
      </div>
      </div>
  );
}

export default ConvBoard;