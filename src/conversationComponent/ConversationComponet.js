import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useEffect, useReducer, useState } from 'react';

//the conversation component
function ConversationComponent(props) {
  var friendData = props.friend[0];
  var friendChat = props.friend[1];
  var NewMessageList = [];
  const [renreds, setRenders] = useState(true);
  //setting the last massage and time on the appropriate chat
  const setLast = (message, time) => {
    props.setLast(message, time);
  }

  //calculates the current time and maintains the HH::MM format.
  var today = new Date();
  var time;
  if (today.getMinutes() < 10) {
    time = today.getHours() + ":0" + today.getMinutes();
  }
  else {
    time = today.getHours() + ":" + today.getMinutes();
  }

  // new message list which will be displayed

  for (var i = 0; i < friendChat.length; i++) {
    var type = 0;
    //console.log(friendMessages)
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
  props.connection.on("ReciveMessage", (message, unuiqeId, remoteName) => {
    var today1 = new Date();
    var time1;
    console.log(message);
    if (today1.getMinutes() < 10) {
      time1 = today1.getHours() + ":0" + today1.getMinutes();
    }
    else {
      time1= today1.getHours() + ":" + today1.getMinutes();
    }
    var isExsits = false;

      if(friendChat[friendChat.length - 1].id === unuiqeId){
        isExsits = true;
      }
      
    if(isExsits === false && friendData.id === remoteName){
      friendChat.push({id: unuiqeId, content: message, created: time1, sent: false });
    }
    setRenders(!renreds);
    //setLast(message,time1, unuiqeId);
  });
  
  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={NewMessageList} />
      </div>
      <TypingBoard seenMessages = {props.seenMessage} user = {props.user} friendData={friendData} setter={(props) => {
        friendChat.push({ id: 0, content: props[0], created: time, sent: true });
        setLast(props[0], time, Math.random());
        forceUpdate();
      }} friend = {friendData} />
    </div>

  );
}

export default ConversationComponent;