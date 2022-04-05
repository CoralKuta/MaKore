import TypingBoard from './typingBoard/TypingBoard';
import './App.css';
import ConvBoard from './convBoard/ConvBoard';
import Message from './message/Message'
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState('')

  return (
    <div>
      <ConvBoard messageList={messageList}/>
      <div>
        {messageList}
      </div>
      <TypingBoard setter = {(newMessage)=>setMessageList([messageList, <Message content={newMessage}/>])}/>
    </div>
      );
}

export default App;