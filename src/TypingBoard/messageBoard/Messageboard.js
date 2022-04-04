import './Messageboard.css';
import React, { Component } from 'react';
import { useRef } from 'react';

function Messageboard({setMsg}) {
    const textBoard = useRef(null);
    const ever = function(){
        setMsg(textBoard.current.value)
    }
    return (
      <textarea onKeyUp={ever} ref={textBoard}  className="message-board w-80" placeholder="New message here..."></textarea>
    );
}

export default Messageboard;    