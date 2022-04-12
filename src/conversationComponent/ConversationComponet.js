import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { Component } from 'react';
import { useState } from 'react';
import { render } from '@testing-library/react';

function ConversationComponent(properties) {
  var friend = properties.friend;
  const [messageList, setMessageList] = useState('');

  if (messageList[messageList.length - 1] != null) {
    var type = messageList[messageList.length - 1].props.content[0];

    if (type == 0) {
      // text
      properties.setLastMassage(messageList[messageList.length - 1].props.content[1]);

    } else if (type == 1) {
      //image
      properties.setLastMassage("Photo");

    } else if (type == 2) {
      //video
      properties.setLastMassage("Video");

    } else {
      // audio
      properties.setLastMassage("Voice message");
    }
  }



  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={messageList} />
      </div>
      <TypingBoard setter={(props) => {
        var today = new Date();
        if (today.getMinutes() < 10)
          var time = today.getHours() + ":0" + today.getMinutes();
        else
          var time = today.getHours() + ":" + today.getMinutes();
        setMessageList([messageList, <Message content={[props[0], props[1], time]} />]);
      }} />

    </div>

  );
}

export default ConversationComponent;