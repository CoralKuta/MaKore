import './TypingBoard.css';
import AttachComponent from './attachComponent/AttachComponent';
import { useRef } from 'react';
import { useState } from 'react';


function TypingBoard({seenMessages ,user, friendData, setter }) {

  const textBoard = useRef(null);
  // // to change height of grayPanel
  const [height, setHeight] = useState('43px');
  const [topBorderText, settopBorderText] = useState('52px');

  //typing function
  function typing() {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", e => {
      textarea.style.height = "auto";
      let scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`;
      setHeight(scHeight);
      let bot = e.target.scrollHeight + 10;
      if (bot < 170) {
        settopBorderText(`${bot}px`);
      }
    })
  }
  const [message, setMessage] = useState("");
  const cleanTextarea = function () {
    const textarea = document.querySelector("textarea");
    document.getElementById("attached").style.display = "none"
    //clean the text board (input field)
    textBoard.current.value = '';
    setHeight('43px');
    settopBorderText('52px');
  }

  const send = async function () {
    const textarea = document.querySelector("textarea");
    textarea.style.height = "auto";
    var userInput = textBoard.current.value.trim();
    //send message if it isn't empty
    if (userInput != "") {
      setMessage(userInput);
      const requestOptions = {
        method: 'post',
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: userInput })
      };
      const res = await fetch('http://localhost:5018/api/contacts/' + friendData.id + '/messages', requestOptions);
      const data = await res.text();
    };

    setter([userInput]);
    cleanTextarea();
  }


  const attach = function () {

    if (document.getElementById("attached").style.display != "block")
      document.getElementById("attached").style.display = "block"
    else
      document.getElementById("attached").style.display = "none"
  }

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.key == 'Enter' && !e.shiftKey) {
      send();
      document.querySelector("textarea").value = "";
    }
  };
  const userName = user.id;
  const remoteUserName = friendData.id;
  if(message !== "")
    seenMessages(message, remoteUserName, userName);
  return (
    <div className="gray-low-panel d-flex" id="grayPanel" style={{ 'height': height }}>
      <div id="attached" className="attached" style={{ 'bottom': topBorderText }}>
        <AttachComponent setter={setter} />
      </div>
      <svg onClick={attach} xmlns="http://www.w3.org/2000/svg" className="bi bi-paperclip" viewBox="0 0 16 16">
        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
      </svg>
      <textarea onKeyUp={handleKeypress} onChange={typing} ref={textBoard} className="message-board w-80" placeholder="New message here..."></textarea>
      <svg onClick={send} xmlns="http://www.w3.org/2000/svg" className="bi  bi-arrow-right-circle-fill" viewBox="0 0 16 16" >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
      </svg>
    </div>

  );
}

export default TypingBoard;




