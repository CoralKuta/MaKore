import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState } from 'react';

function ConversationComponent({ friend }) {

  const friendData = friend[0];
  var friendChat = friend[1];



  const [messageList, setMessageList] = useState('');
  const [alredyReply, setAlredyReply] = useState(false);

  var today = new Date();
  if (today.getMinutes() < 10){
    var time = today.getHours() + ":0" + today.getMinutes();
    var fullTime = time + today.getSeconds() + today.getMilliseconds();
  }
  else{
    var time = today.getHours() + ":" + today.getMinutes();
    var fullTime = time + today.getSeconds() + today.getMilliseconds();
  }




  const autoReply = function () {
    setTimeout(() => {
      setMessageList(friendChat.push(<Message key={fullTime} content={[4, 'nothing', time]} />));
    }, 500);
    setAlredyReply(true);
  }







  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={friendChat} />
      </div>
      <TypingBoard setter={(props) => {
        // setMessageList([messageList, <Message content={[props[0], props[1], time]} />]);
        setMessageList(friendChat.push(<Message key={props[0] + fullTime} content={[props[0], props[1], time]} />));
        console.log(friendChat);
        let messages = document.querySelectorAll('.time-msg');
        let element = messages[messages.length-1];
        console.log(element);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        if (!alredyReply) {
          autoReply();
        }
      }} />
    </div>

  );
}

export default ConversationComponent;