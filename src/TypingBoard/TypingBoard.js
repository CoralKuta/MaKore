import './TypingBoard.css';
import React, { Component } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

//TODO - 
//       1. validity check before sending (don't send message with blank chars)
//       2. flexible textarea when breakline comes without damaging the icons size


function TypingBoard({setter}) {
  const textBoard = useRef(null);

  

  const send = function () {
    //send message if it isn't empty
    if(textBoard.current.value != ""){
      console.log(textBoard.current.value);
      setter(textBoard.current.value);
      //clean the text board (input field)
      textBoard.current.value='';
    }
  }


  return (
    <div className="gray-low-panel d-flex">
      <svg id="attachBtn" xmlns="http://www.w3.org/2000/svg" className="bi bi-paperclip w-10" viewBox="0 0 16 16">
        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
      </svg>
      <textarea ref={textBoard}  className="message-board w-80" placeholder="New message here..."></textarea>
      <svg onClick={send} xmlns="http://www.w3.org/2000/svg" className="bi bi-send w-10" viewBox="0 0 16 16" >
        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
      </svg>
    </div>
  );
}

export default TypingBoard;