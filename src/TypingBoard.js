import './TypingBoard.css';
import React, { Component }  from 'react';

function TypingBoard() {
  return (
    <div>
      <div class="grey">
        <input class="down-label" placeholder="New message here..."></input>
      </div>    
    </div>
  );
}

export default TypingBoard;