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
    <div className="d-flex flex-column all">
      <TypingBoard setter={(newMessage) => setMessageList([messageList, <Message content={newMessage} />])} />
      <div className="d-flex flex-column flex-grow-1">
        <div className="overflow-auto">
          <ConvBoard messageList={messageList} />
        </div>
      </div>
    </div>
  );
}

export default App;