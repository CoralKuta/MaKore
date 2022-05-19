import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState, useEffect, useReducer } from 'react';

//the conversation component
function ConversationComponent(props) {
  var friendData = props.friend[0];
  var friendChat = props.friend[1];
  var NewMessageList = [];

  //setting the last massage and time on the appropriate chat
  const setLast = (message, time) => {
    props.setLast(message, time);
  }

  //calculates the current time and maintains the HH::MM format.
  var today = new Date();
  var time, fullTime;
  if (today.getMinutes() < 10) {
    time = today.getHours() + ":0" + today.getMinutes();
    fullTime = time + today.getSeconds() + today.getMilliseconds();
  }
  else {
    time = today.getHours() + ":" + today.getMinutes();
    fullTime = time + today.getSeconds() + today.getMilliseconds();
  }

  // new message list which will be displayed

  for (var i = 0; i < friendChat.length; i++) {
    var type = 0;
    if (friendChat[i].sent !== true) {
      type = 1;
    }
    NewMessageList.push(<Message key={Math.random()} content={[type, friendChat[i].content, friendChat[i].created]} />)
  }
  //When a new message arrives, it scrolls down the conversation.
  useEffect(() => {
    let messages = document.querySelectorAll('.time-msg');
    if (messages.length !== 0) {
      let element = messages[messages.length - 1];
      setTimeout(() => {
        element.scrollIntoView({ block: "start", inline: "nearest" });
      }, 10);
    }
  })
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  
  props.connection.on("ReciveMessage", (message) => {
    friendChat.push({id: 0, contenet: message, created: time, sent: false });
    setLast(message, time);
  });
  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={NewMessageList} />
      </div>
      <TypingBoard seenMessages = {props.seenMessage} user = {props.user} friendData={friendData} setter={(props) => {
        friendChat.push({ id: 0, content: props[0], created: time, sent: true });
        setLast(props[0], time);
        forceUpdate();
      }} friend = {friendData} />
    </div>

  );
}

export default ConversationComponent;