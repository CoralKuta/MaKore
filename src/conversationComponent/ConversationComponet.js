import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState, useEffect, useReducer } from 'react';


//the conversation component
function ConversationComponent({ friend, setLast, user }) {

  var friendData = friend[0];
  var friendChat = friend[1];

  const [messageList, setMessageList] = useState(friendChat);


  //this useEfect hook is to set the last massage by type and time of the message at the appropriate chat 
  useEffect(() => {
    if (friendChat[friendChat.length - 1] != null) {
      // Update the document title using the browser API
      setLast(friendChat[friendChat.length - 1].props.content[1], friendChat[friendChat.length - 1].props.content[2]);
    }
  });

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

  const requestOptions = {
    method: 'Post',
    headers: {'Content-Type':'application/json'},
  };

  
  fetch('http://localhost:5018/api/contacts/:id/messages',requestOptions)
  .then(function (response) {
    if (response.status == 200) {
          return response.json();
    }
    return null;
  })
  .then(function(data){
    data.forEach(m => {
      setMessageList(friendChat.push(<Message key={"12143322654624"} content={[m.content, m.created]} />));
    });     


  });


  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={friendChat} />
      </div>
      <TypingBoard currUser={user}/>
    </div>

  );
}

export default ConversationComponent;