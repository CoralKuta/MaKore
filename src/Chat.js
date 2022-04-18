import './Chat.css';
import users from './users';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUp.css';
import { useLocation } from 'react-router-dom';
import MessageHead from './MessageHead/MessageHead';


function Chat() {
  const user = useLocation().state.data;
  const friends = user.friends;

  const [friend, setFriend] = useState({});
  const [displayFriendsList, setDisplayFriendsList] = useState(friends);
  const [friendsList, setFriendsList] = useState(friends);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const doSearch = function (searchName) {
    // setFriendsList(friendsList.filter((friend) => friend.Username.includes(searchName)));
    let filtered = [];
    for (let i = 0; i < friendsList.length; i++) {
      console.log(friendsList[i][0].Username);
      if (friendsList[i][0].Username.includes(searchName)) {
        filtered.push(friendsList[i]);
      }
    }
    setDisplayFriendsList(filtered);
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
          <MemberInfo user={user} setButtonPopup={setButtonPopup} />
          <Search doSearch={doSearch} />
          <ContactsListResult friends={displayFriendsList} changeFriend={setFriend} setOriginFriendsList={setFriend} originFriendsList={friendsList} />
          {/* <ContactsListResult friends={friendsList} changeFriend={setFriend} setDisplayFriendsList={setDisplayFriendsList} displayFriendsList = {displayFriendsList}/> */}
        </div>
        <div className="ChatScreen">
          <MessageHead friend={friend} setLast={setLast} />
        </div>
      </div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} hideErrors={hideErrors} setNameId={setNameId} nameID={nameId}
        displayError={displayError} errorMessages={errorMessages} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;