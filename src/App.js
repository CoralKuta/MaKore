import TypingBoard from './typingBoard/TypingBoard';
import './App.css';
import ConvBoard from './convBoard/ConvBoard';
import Message from './message/Message'
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState('')
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  return (
    <div className="d-flex flex-column all">
      <TypingBoard setter={(newMessage) => setMessageList([messageList, <Message content={[newMessage, time]} />])} />
      <div className="d-flex flex-column flex-grow-1">
          <ConvBoard messageList={messageList} />
      </div>
    </div>
  );
}

export default App;