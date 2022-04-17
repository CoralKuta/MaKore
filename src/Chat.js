import './Chat.css';
import users from './users';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUp.css';
<<<<<<< HEAD
import img from './img.jpeg';
import { Routes, Route, useLocation } from 'react-router-dom';
=======
import { useLocation } from 'react-router-dom';
>>>>>>> 0ec030fb64486125b65e1109cd5038db0b8009c8
import MessageHead from './MessageHead/MessageHead';


function Chat() {
<<<<<<< HEAD
  const data = useLocation();
  var contacts = data.state.data.friends;
  var member = data.state.data;
  const [contactList, setcontactList] = useState(contacts);
=======
  const user = useLocation().state.data;
  const friends = user.friends;

  const [friend, setFriend] = useState({});
  const [friendsList, setFriendsList] = useState(friends);
>>>>>>> 0ec030fb64486125b65e1109cd5038db0b8009c8
  const [buttonPopup, setButtonPopup] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const doSearch = function (searchName) {    
    setFriendsList(friendsList.filter((friend) => friend.Username.includes(searchName)));  
  }

  const [displayError, setdisplayError] = useState('none');


  const hideErrors = function () {
    setErrorMessages({});
  }

  const [nameId, setNameId] = useState("");
  const errors = {
    inValid: "There is no such user! Please try again.",
    yourSelf: "You can't add your self as a new contact!",
    alreadyExists: "This contact already exists!"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noti = 0;
    var contactIdentifier = /*users.find((user) => user.Username === nameId);*/ (1 === 0);

    for (var k = 0; k < users.length; k++) {
      if (users[k].Username == nameId) {
        contactIdentifier = (1 === 1);
      }
    }
    var checkExists = (1 === 0);
    for (var j = 0; j < friends.length; j++) {
      if (friends[j][0].Username == nameId) {
        checkExists = (1 === 1);
      }
    }


    // we want to add a friend to our user. we find the user in "users" and add the new friend.
    for (var i = 0; i < users.length; i++) {
      if (users[i].Username == nameId) {
        var newContactName = users[i].Username;
        var NewContactNickName = users[i].Nickname;
        var NewContactPassword = users[i].password;
        var NewContactPic = users[i].pic;
        var newContactFriends = users[i].friends;
      }
    }

    const newFriend = {
      Username: newContactName, Nickname: NewContactNickName, password: NewContactPassword,
      pic: NewContactPic, friends: newContactFriends, noti: noti
    };

    const friendName = document.getElementById("MemberName");

    if (contactIdentifier && !checkExists && (friendName.innerText !== nameId)) {
      friends.push([newFriend, []]);
      setNameId("");
      setButtonPopup(false);
    }
    else if (!contactIdentifier) {
      setErrorMessages({ name: "uname", message: errors.inValid });
      setdisplayError('block');
    }
    else if (checkExists) {
      setErrorMessages({ name: "uname", message: errors.alreadyExists });
      setdisplayError('block');
    }
    else {
      setErrorMessages({ name: "uname", message: errors.yourSelf });
      setdisplayError('block');
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const [message, setMessage] = useState(friend.lastMessage);

  function setLast(message) {
      friend[0].lastMessage = message;
      setMessage(message);
  }

  return (

    <div className="background" >
      <div className="container">
        <div className="ContactScreen" >
<<<<<<< HEAD
          <div className="MemmberInfo">
<<<<<<< HEAD
            <MemberInfo member = {member}/>
=======
            <MemberInfo user={user} />
>>>>>>> 0ec030fb64486125b65e1109cd5038db0b8009c8
            <button onClick={() => setButtonPopup(true)} type="button" className="bi-person-plus"></button>
          </div>
          <div className="searchChat">
=======
          {/* <div className="MemmberInfo"> */}
            <MemberInfo user={user} setButtonPopup = {setButtonPopup} />
            {/* <button onClick={() => setButtonPopup(true)} type="button" className="bi-person-plus"></button> */}
          {/* </div> */}
          {/* <div className="searchChat"> */}
>>>>>>> 9264fe69858e4e0e1438f2d7a46077546110ca05
            <Search doSearch={doSearch} />
          {/* </div> */}
          <ContactsListResult friends={friendsList} changeFriend={setFriend} />
        </div>
        <div className="ChatScreen">
          <MessageHead friend={friend} setLast={setLast} />
        </div>
      </div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} hideErrors={hideErrors} setNameId={setNameId} nameID ={nameId}
              displayError = {displayError} errorMessages={errorMessages} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Chat;