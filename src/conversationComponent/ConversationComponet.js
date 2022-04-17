import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState } from 'react';

function ConversationComponent({friend}) {

  const friendData = friend[0];
  var friendChat = friend[1];



  const [messageList, setMessageList] = useState('');
  const [reply, setReply] = useState(false);
  const [alredyReply, setAlredyReply] = useState(false);

  var today = new Date();
  if (today.getMinutes() < 10)
    var time = today.getHours() + ":0" + today.getMinutes();
  else
    var time = today.getHours() + ":" + today.getMinutes();


  
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
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={friendChat} />
      </div>
      <TypingBoard setter={(props) => {
        //setMessageList([messageList, <Message content={[props[0], props[1], time]} />]);
        setMessageList(friendChat.push(<Message content={[props[0], props[1], time]} />));
        console.log(friendChat);
        let element = document.querySelector('.chat-background');
        element.scrollTop = element.scrollHeight;
        if(!alredyReply){
        setReply(true);
      }}} />
    </div>

  );
}

export default ConversationComponent;