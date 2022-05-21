import './Chat.css';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useEffect, useState, useReducer } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import MessageHead from './MessageHead/MessageHead';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useNavigate } from 'react-router-dom';
import consts from './consts.js';


function Chat() {
  const [friends, setFriends] = useState([]);
  const [displayFriendsList, setDisplayFriendsList] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
  const [user, setUser] = useState([]);
  const [friend, setFriend] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  // const [message, setMessage] = useState(friend.lastMessage);
  // const [time, setTime] = useState(friend.lastTime);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getAnswer = async () => {
    const requestOptions = {
      method: 'get',
      headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
    };
    const res1 = await fetch('http://' + consts.myServer + '/api/me', requestOptions);
    if (res1.status == 400) {
      navigate('../', {});

    }
    const data1 = await res1.json();
    setUser(data1);
    registerToListener(data1.id);
    const res = await fetch('http://' + consts.myServer + '/api/contacts', requestOptions);
    const data = await res.json();
    setDisplayFriendsList(data);
    setFriendsList(data);
    setFriends(data);
    const res2 = await fetch('http://' + consts.myServer + '/api/Users', requestOptions);
    const data2 = await res2.json();
    setUsers(data2);
  };
  useEffect(() => {
    getAnswer();
  }, []);

  //this is the search method we are going all over the friends list to find the chat that includes the search name
  const doSearch = function (searchName) {
    let filtered = [];
    for (let i = 0; i < friendsList.length; i++) {
      if (friendsList[i].id.includes(searchName)) {
        filtered.push(friendsList[i]);
      }
    }
    setDisplayFriendsList(filtered);
  }

  const [displayError, setdisplayError] = useState('none');

  // the hide errors function to hide the errors
  const hideErrors = function () {
    setErrorMessages({});
  }

  const [nameId, setNameId] = useState("");
  const [nick, setNick] = useState("");
  const [server, setServer] = useState("");

  //the errors that we are displaying when an error occur in the adding contact
  const errors = {
    inValid: "There is no such user! Please try again.",
    yourSelf: "You can't add your self as a user!",
    alreadyExists: "This user already exists!",
    invitations: "An invitations has been sent to the user!"
  };

  //handle submit function that take care of the adding contact if there is no error
  const handleSubmit = async (e) => {
    e.preventDefault();
    const noti = 0;
    var contactIdentifier = false;
    //check if the friend is exists in the users list from the DB
    for (var k = 0; k < users.length; k++) {
      if (users[k].id === nameId) {
        contactIdentifier = true;
      }
    }
    //check if the friend is already exists in my chat
    var checkExists = false;
    for (var j = 0; j < friends.length; j++) {
      if (friends[j].id === nameId) {
        checkExists = true;
      }
    }


    var newContactName;
    var newNickName;
    var newServer;
    var newLastMessage;
    var newLastDate;

    // we want to add a friend to our user. we find the user in "users" and add the new friend.
    var isOur = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === nameId) {
        isOur = true;
        newContactName = users[i].id;
        newNickName = nick;
        newServer = users[i].server;
        newLastMessage = users[i].last;
        newLastDate = users[i].lastDate;
      }
    }

    // not our user -> invitations
    if (isOur == false) {
      newContactName = nameId;
      newNickName = nick;
      newServer = server;
      newLastMessage = "";
      newLastDate = "";


      const ro = {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: user.id, to: newContactName, Server: consts.myServer })
      };
      const a = await fetch('http://' + server + '/api/invitations', ro)
        .then(response => {
          if (response.status == 200) {
            return response.text();
          } else {
            //return response.status;
            setErrorMessages({ name: "uname", message: errors.invitations });
            setdisplayError('block');
          }
        })

    }


    // the new friend
    const newFriend = { id: newContactName, name: newNickName, server: newServer, last: newLastMessage, lastDate: newLastDate };
    // get the user name
    const friendName = document.getElementById("MemberName");
    // check the the contact that we are adding is exists in the user list, not already in our chat, and we are not trying to add ourself to the chat
    if (contactIdentifier && !checkExists && (friendName.innerText !== nameId)) {
      const requestOptions = {
        method: 'Post',
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
        body: JSON.stringify({ UserName: newFriend.id, NickName: newNickName, Server: newServer })
      };
      const token = await fetch('http://' + consts.myServer + '/api/addConversation', requestOptions)
        .then(response => {
          if (response.status == 200) {
            return response.text();
          } else {
            return response.status;
          }
        })
      friends.push(newFriend);
      setDisplayFriendsList(friendsList);
      setNameId("");
      setNick("");
      setServer("");

    }//display the appropriate error
    else if (!contactIdentifier) {
      setErrorMessages({ name: "uname", message: errors.inValid });
      setdisplayError('block');
    } //display the appropriate error
    else if (checkExists) {
      setErrorMessages({ name: "uname", message: errors.alreadyExists });
      setdisplayError('block');
    }//display the appropriate error
    else {
      setErrorMessages({ name: "uname", message: errors.yourSelf });
      setdisplayError('block');
    }
  }

  //the setLast function to set the last message the its time
  function setLast(message, time) {
    // friend[0].lastMessage = message;
    // setMessage(message);
    // friend[0].lastTime = time;
    // setTime(time);
  }

  const [connection, setConnection] = useState();
  const registerToListener = async (userName) => {
    try {
      var url = 'http://' + consts.myServer + '/MessagesHub'
      const connection = new HubConnectionBuilder()
        .withUrl(url)
        .configureLogging(LogLevel.Information)
        .build();
      await connection.start();
      await connection.invoke("registerToListener", { userName });
      setConnection(connection);
    } catch (e) {

    }
  }

  const immediateSeenMessage = async (message, remoteUserName, userName) => {
    try {
      await connection.invoke("immediateSeenMessage", { message, remoteUserName, userName });
    }
    catch (e) {

    }
  }

  return (

    <div className="background" >
      <div className="container">
        <div className="ContactScreen" >
          <MemberInfo user={user} />
          <Search doSearch={doSearch} />
          <ContactsListResult friends={displayFriendsList} changeFriend={setFriend} user={user} setOriginFriendsList={setFriend} />
        </div>
        <div className="ChatScreen">
          <MessageHead friend={friend} setLast={setLast} user={user} seenMessages={immediateSeenMessage} connection={connection} />
        </div>
      </div>
      <PopUp hideErrors={hideErrors} setNameId={setNameId} nameId={nameId} setServer={setServer} server={server}
        setNick={setNick} nick={nick} displayError={displayError} errorMessages={errorMessages} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;