import TypingBoard from './TypingBoard/TypingBoard';
import './App.css';
import ConvBoard from './convBoard/ConvBoard';
import Message from './message/Message'
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState('')


  return (
    <div className="all">
      <div className="messageComp">
        <ConvBoard messageList={messageList} />
      </div>
      <TypingBoard setter={(newMessage) => {
        var today = new Date();
        if (today.getMinutes() < 10)
          var time = today.getHours() + ":0" + today.getMinutes();
        else
          var time = today.getHours() + ":" + today.getMinutes();
        setMessageList([messageList, <Message content={[newMessage, time]} />]);
      }} />
    </div>
  );
}

export default App;