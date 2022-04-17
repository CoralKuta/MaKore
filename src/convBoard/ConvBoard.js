import './ConvBoard.css';
import React from 'react';

function ConvBoard(props) {
  
  return (
    <div>
      <div className="chat-background d-flex flex-column align-items-start">
        {props.messageList}
      </div>
      </div>
  );
}

export default ConvBoard;