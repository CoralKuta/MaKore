import TypingBoard from './typingBoard/TypingBoard';
import './App.css';
import ConvBoard from './convBoard/ConvBoard';
import Message from './message/Message'
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState('');
  const [reply, setReply] = useState(false);
  const [alredyReply, setAlredyReply] = useState(false);

  const autoReply = function () {
    var today = new Date();
        if (today.getMinutes() < 10)
          var time = today.getHours() + ":0" + today.getMinutes();
        else
          var time = today.getHours() + ":" + today.getMinutes();
    setMessageList([messageList, <Message content={[4, 'nothing', time]} />]);
  }
  if (reply){
    setTimeout(() => {autoReply();console.log("this is the first message")}, 2000);
    setReply(false);
    setAlredyReply(true);
  }



  return (
    <div className="all">
      <div className="messageComp" >
        <ConvBoard messageList={messageList} />
      </div>
      <TypingBoard setter={(props) => {
        var today = new Date();
        if (today.getMinutes() < 10)
          var time = today.getHours() + ":0" + today.getMinutes();
        else
          var time = today.getHours() + ":" + today.getMinutes();
        setMessageList([messageList, <Message content={[props[0], props[1], time]} />]);
        let element = document.querySelector('.chat-background');
        element.scrollTop = element.scrollHeight;
        if(!alredyReply){
        setReply(true);
        }
      }}
      />
    </div>
  );

}

export default App;