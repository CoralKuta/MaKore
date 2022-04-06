import './ConvBoard.css';
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';



function ConvBoard({messageList}) {
  return (
    <div className="chat-background d-flex flex-column align-items-start justify-content-end">
        {messageList}
    </div>
  );
}

export default ConvBoard;