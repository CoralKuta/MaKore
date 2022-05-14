import './ConversationComponent.css';
import TypingBoard from '../typingBoard/TypingBoard';
import ConvBoard from '../convBoard/ConvBoard';
import Message from '../message/Message'
import React, { useState, useEffect, useReducer } from 'react';


//the conversation component
function ConversationComponent({ friend, setLast, user }) {
  var friendData = friend[0];
  var friendChat = friend[1];

  //this useEfect hook is to set the last massage by type and time of the message at the appropriate chat 
  /*
  useEffect(() => {
    if (friendChat[friendChat.length - 1] != null) {
      // Update the document title using the browser API
      setLast(friendChat[friendChat.length - 1].props.content[1], friendChat[friendChat.length - 1].props.content[2]);
    }
  });
*/

  var NewMessageList=[];
  console.log(friendChat)
  for(var i = 0; i < friendChat.length; i++)
    NewMessageList.push(<Message key={1 + Math.random()} content={[friendChat[i].content, friendChat[i].created]}/>)
  const [b, setB] = useState(NewMessageList);
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
        <ConvBoard messageList={NewMessageList} />
      </div>
      <TypingBoard setter={(props) => {
        setB(NewMessageList.push(<Message key={1 + Math.random()} content={[props[1], "13:00"]} />));
        forceUpdate();
      }} />
    </div>

  );
}

export default ConversationComponent;