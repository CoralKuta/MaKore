import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState } from 'react';

function ConversationComponent({friend}) {

  const friendData = friend[0];
  var friendChat = friend[1];


  const [messageList, setMessageList] = useState(friendChat);

  var today = new Date();
  if (today.getMinutes() < 10)
    var time = today.getHours() + ":0" + today.getMinutes();
  else
    var time = today.getHours() + ":" + today.getMinutes();


  // if (messageList[messageList.length - 1] != null) {
  //   var type = messageList[messageList.length - 1].props.content[0];

  //   if (type == 0) {
  //     // text
  //     properties.setLast(messageList[messageList.length - 1].props.content[1], time);

  //   } else if (type == 1) {
  //     //image
  //     properties.setLast("Photo", time);

  //   } else if (type == 2) {
  //     //video
  //     properties.setLast("Video", time);

  //   } else {
  //     // audio
  //     properties.setLast("Voice message", time);
  //   }
  // }



  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={messageList} />
      </div>
      <TypingBoard setter={(props) => {
        setMessageList([messageList, <Message content={[props[0], props[1], time]} />]);
      }} />
    </div>

  );
}

export default ConversationComponent;