import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState, useEffect } from 'react';
import { fireEvent } from '@testing-library/react';

function ConversationComponent({ friend, setLast }) {

  var friendData = friend[0];
  var friendChat = friend[1];

  
  const [messageList, setMessageList] = useState(friendChat);
  const [alredyReply, setAlredyReply] = useState(false);

  // if ((friendData.lastMessage != "") && (messageList == "")) {
  //   setMessageList(friendChat.push(<Message key={"initial message"} content={[4, friendData.lastMessage, time]} />));
  // }

  useEffect(() => {
    if (friendChat[friendChat.length - 1] != null) {
      // Update the document title using the browser API
      var type = friendChat[friendChat.length - 1].props.content[0];

      if (type == 0) {
        // text
        setLast(friendChat[friendChat.length - 1].props.content[1]);
      } else if (type == 1) {
        //image
        setLast("Photo");
      } else if (type == 2) {
        //video
        setLast("Video");
      } else if (type == 3) {
        // audio
        setLast("Voice message");
      } else {  // type 4
        //auto reply / respond
        setLast(friendChat[friendChat.length - 1].props.content[1]);
      }
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
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 0);

    }
  })


// Sends an auto-response after the first message is sent.
  const autoReply = function () {
    setTimeout(() => {
      setMessageList(friendChat.push(<Message key={fullTime} content={[4, 'Nice app!\n This is an automatic response', time]} />));
    }, 500);
    setAlredyReply(true);
  }



  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={friendChat} />
      </div>
      <TypingBoard setter={(props) => {
        setMessageList(friendChat.push(<Message key={props[0] + fullTime} content={[props[0], props[1], time]} />));
        if (!alredyReply) {
          autoReply();
        }
      }} />
    </div>

  );
}

export default ConversationComponent;