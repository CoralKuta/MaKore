import './ConvBoard.css';
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';



function ConvBoard(props) {
  const friend = props.friend;
  
  return (
      <div className="chat-background d-flex flex-column align-items-start">
        {props.messageList}
      </div>
  );
}

export default ConvBoard;