import './ConvBoard.css';
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';



function ConvBoard({messageList}) {
  return (
    <div className="chat-background">
        {messageList}
    </div>
  );
}

export default ConvBoard;