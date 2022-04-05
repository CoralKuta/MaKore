import TypingBoard from './typingBoard/TypingBoard';
import './App.css';
import ConvBoard from './convBoard/ConvBoard';
import Message from './message/Message'
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState(Message)
  const send = function(newMessage)
  {setMessageList([messageList, <Message content={newMessage}/>])}

  return (
    <div>
      <ConvBoard messageList={messageList}/>
      <div>
        {messageList}
      </div>
      <TypingBoard setter = {send}/>
    </div>
      );
}

export default App;