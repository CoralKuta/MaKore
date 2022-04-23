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

  const [messageList, setMessageList] = useState(friendChat);
  const [alredyReply, setAlredyReply] = useState(false);


  // this statement display the hardcoded messages
  if (user.Username === "Ido") {
    if ((friendChat.length == 0) && (friendChat == "") && (friendData.lastMessage != "") && (typeof friendData.lastMessage != "undefined")) {
      if (friendData.Username === "Coral") {
        setMessageList(friendChat.push(<Message key={"1222221331"} content={[3, audio, "00:01"]} />));
        setMessageList(friendChat.push(<Message key={"11331"} content={[1, img, "00:01"]} />));

      } else if (friendData.Username === "Tal") {
        setMessageList(friendChat.push(<Message key={"112111"} content={[2, video, "00:01"]} />));
        setMessageList(friendChat.push(<Message key={"1121ggg11"} content={[0, "אחי תראה איך התקדמתי בתרגיל", "00:01"]} />));
      }
      setMessageList(friendChat.push(<Message key={"17711"} content={[4, friendData.lastMessage, "00:01"]} />));
    }
  }


  //this useEfect hook is to set the last massage by type and time of the message at the appropriate chat 
  useEffect(() => {
    if (friendChat[friendChat.length - 1] != null) {
      // Update the document title using the browser API
      var type = friendChat[friendChat.length - 1].props.content[0];
      if (type == 0) {
        // text
        setLast(friendChat[friendChat.length - 1].props.content[1], friendChat[friendChat.length - 1].props.content[2]);
      } else if (type == 1) {
        //image
        setLast("Photo", friendChat[friendChat.length - 1].props.content[2]);
      } else if (type == 2) {
        //video
        setLast("Video", friendChat[friendChat.length - 1].props.content[2]);
      } else if (type == 3) {
        // audio
        setLast("Voice message", friendChat[friendChat.length - 1].props.content[2]);
      } else {  // type 4
        //auto reply / respond
        setLast(friendChat[friendChat.length - 1].props.content[1], friendChat[friendChat.length - 1].props.content[2]);
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
      if(friendChat[friendChat.length-1].props.content[0] == 1 || friendChat[friendChat.length-1].props.content[0] == 2) {
        setTimeout(() => {
          element.scrollIntoView();
        }, 50);
      }
      else {
      element.scrollIntoView();
      }
    }
  })


  // Sends an auto-response after the first message is sent.
  const autoReply = function () {
    setTimeout(() => {
      setMessageList(friendChat.push(<Message key={fullTime} content={[4, 'Nice app!\n This is an automatic response', time]} />));
    }, 500);
    setAlredyReply(true);
  }


  const [, forceUpdate] = useReducer(x => x + 1, 0);



  return (
    <div className="all-conv-board">
      <div className="messageComp">
        <ConvBoard messageList={friendChat} />
      </div>
      <TypingBoard setter={(props) => {
        setMessageList(friendChat.push(<Message key={props[0] + fullTime} content={[props[0], props[1], time]} />));
        forceUpdate();
        if (!alredyReply) {
          autoReply();
        }
      }} />
    </div>

  );
}

export default ConversationComponent;