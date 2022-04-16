import './ConvBoard.css';
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';



function ConvBoard({ messageList }) {
  return (
    <div>
      <div className="chat-background d-flex flex-column align-items-start">
        {messageList}
      </div>
      </div>
  );
}

export default ConvBoard;