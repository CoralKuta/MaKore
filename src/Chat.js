import './Chat.css';
import users from './users';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUpComponent/PopUp.css';
import { useLocation } from 'react-router-dom';
import MessageHead from './MessageHead/MessageHead';
import Message from './message/Message'


function Chat() {
  const user = useLocation().state.data;
  const friends = user.friends;

  const [friend, setFriend] = useState({});
  const [displayFriendsList, setDisplayFriendsList] = useState(friends);
  const [friendsList, setFriendsList] = useState(friends);
  const [errorMessages, setErrorMessages] = useState({});

  const doSearch = function (searchName) {
    // setFriendsList(friendsList.filter((friend) => friend.Username.includes(searchName)));
    let filtered = [];
    for (let i = 0; i < friendsList.length; i++) {
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
    yourSelf: "You can't add your self as a user!",
    alreadyExists: "This user already exists!"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noti = 0;
    var contactIdentifier = (1 === 0);

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
      setDisplayFriendsList(friendsList);
      setNameId("");
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

  const [message, setMessage] = useState(friend.lastMessage);
  
  const [time, setTime] = useState(friend.lastTime);

  function setLast(message, time) {
      friend[0].lastMessage = message;
      setMessage(message);
      friend[0].lastTime = time;
      setTime(time);
      console.log(message)
  }

  return (

    <div className="background" >
      <div className="container">
        <div className="ContactScreen" >
        <MemberInfo user={user} setNameId = {setNameId} />
            <Search doSearch={doSearch} />
          <ContactsListResult friends={displayFriendsList} changeFriend={setFriend} user = {user} setOriginFriendsList={setFriend} originFriendsList={friendsList} />
        </div>
        <div className="ChatScreen">
          <MessageHead friend={friend} setLast={setLast} user ={user} />
        </div>
      </div>
      <PopUp hideErrors={hideErrors} setNameId={setNameId} nameId={nameId} displayError={displayError} errorMessages={errorMessages} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Chat;