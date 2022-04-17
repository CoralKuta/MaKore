import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState, useEffect } from 'react';

function ConversationComponent({ friend, setLast }) {

  var friendChat = friend[1];

  const [messageList, setMessageList] = useState(friendChat);
  const [reply, setReply] = useState(false);
  const [alredyReply, setAlredyReply] = useState(false);


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
    } else {
      // audio
      setLast("Voice message");
    }
    }
  });


  var today = new Date();
  if (today.getMinutes() < 10)
    var time = today.getHours() + ":0" + today.getMinutes();
  else
    var time = today.getHours() + ":" + today.getMinutes();



  const autoReply = function () {
    setMessageList(friendChat.push(<Message content={[4, 'nothing', time]} />));
  }

  if (reply) {
    setTimeout(() => { autoReply();}, 2000);
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
        let element = document.querySelector('.chat-background');
        element.scrollTop = element.scrollHeight;
        if (!alredyReply) {
          setReply(true);
        }
      }} />
    </div>

  );
}

export default ConversationComponent;