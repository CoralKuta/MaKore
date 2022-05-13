import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState, useEffect, useReducer } from 'react';
import img from "../images/ido.jpg"
import video from "../images/video.mp4"
import audio from "../images/heyThere.ogg"


//the conversation component
function ConversationComponent({ friend, setLast, user }) {

  var friendData = friend[0];
  var friendChat = friend[1];

  console.log(friend);
  console.log(friend[0]);
  console.log(friend[1]);

  const [messageList, setMessageList] = useState(friendChat);

  //this useEfect hook is to set the last massage by type and time of the message at the appropriate chat 
  useEffect(() => {
    if (friendChat[friendChat.length - 1] != null) {
      // Update the document title using the browser API
      setLast(friendChat[friendChat.length - 1].props.content[1], friendChat[friendChat.length - 1].props.content[2]);
    }
  });

  //calculates the current time and maintains the HH::MM format.
  var today = new Date();
  if (today.getMinutes() < 10) {
    var time = today.getHours() + ":0" + today.getMinutes();
    var fullTime = time + today.getSeconds() + today.getMilliseconds();
  }
  else {
    var time = today.getHours() + ":" + today.getMinutes();
    var fullTime = time + today.getSeconds() + today.getMilliseconds();
  }

  //When a new message arrives, it scrolls down the conversation.
  useEffect(() => {
    let messages = document.querySelectorAll('.time-msg');
    if (messages.length !== 0) {
      let element = messages[messages.length - 1];
      setTimeout(() => {
        element.scrollIntoView({block: "start", inline: "nearest" });
      }, 10);

    }
  })


  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={friendChat} />
      </div>
      <TypingBoard setter={(props) => {
        setMessageList(friendChat.push(<Message key={1 + fullTime} content={[props[1], time]} />));
        forceUpdate();
      }} />
    </div>

  );
}

export default ConversationComponent;