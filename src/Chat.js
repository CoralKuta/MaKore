import './Chat.css';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useEffect, useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import MessageHead from './MessageHead/MessageHead';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useNavigate } from 'react-router-dom';
import consts from './consts.js'
import { useLocation } from 'react-router-dom';

function Chat() {

  const [friends, setFriends] = useState([]);
  const [displayFriendsList, setDisplayFriendsList] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
  const [user, setUser] = useState([]);
  const [friend, setFriend] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [message, setMessage] = useState(friend.lastMessage);
  const [time, setTime] = useState(friend.lastTime);
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

  //the errors that we are displaying when an error occur in the adding contact

  //handle submit function that take care of the adding contact if there is no error
  const [nameId, setNameId] = useState("");
  const [nick, setNick] = useState("");
  const [server, setServer] = useState("");

  //the errors that we are displaying when an error occur in the adding contact
  const errors = {
    inValid: "There is no such user! Please try again.",
    yourSelf: "You can't add your self as a user!",
    alreadyExists: "This user already exists!",
    invitations: "An invitations has been sent to the user!",
    serverError: "This server could not be reached",
    wait: "This may take awhile. Please don't Add again"
  };

  //handle submit function that take care of the adding contact if there is no error
  let isOur = false;

  //handle submit function that take care of the adding contact if there is no error
  const handleSubmit = async (e) => {
    e.preventDefault();

    var newContactName = nameId;
    var newNickName = nick;
    var newServer;
    var newLastMessage;
    var newLastDate;

    if (server == consts.myServer) {
      // we want to add a friend to our user. if we find the friend in "users" he is also our user. else - invitation
      const RequestOptions = {
        method: 'get',
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
      };
      const res = await fetch('http://' + consts.myServer + '/api/existingUser/' + nameId, RequestOptions);
      if (res.status == 200) {
        // the friend is our user !
        isOur = true;
        newServer = consts.myServer;
        newLastMessage = "";
        newLastDate = "";
      }
    }

    // not our user -> invitations
    if (isOur == false) {
      setErrorMessages({ name: "uname", message: errors.wait });
      setdisplayError('block');
      newServer = server;
      newLastMessage = "";
      newLastDate = "";


      const ro = {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: user.id, to: newContactName, Server: consts.myServer })
      };

      try {
        const a = await fetch('http://' + server + '/api/invitations', ro);
        if (a.status == 200) {
          setErrorMessages({ name: "uname", message: errors.invitations });
          setdisplayError('block');
        }
      } catch (e) {
        console.log(e);
        setErrorMessages({ name: "uname", message: errors.serverError });
        setdisplayError('block');
        setNameId("");
        setServer("");
        setNick("");
        return;
      }
    }



    // the new friend
    const newFriend = { id: newContactName, name: newNickName, server: newServer, last: newLastMessage, lastDate: newLastDate };
    // get the user name
    const friendName = document.getElementById("MemberName");

    // check if the contact we are adding exists in the user's list, not already in our chat, and we are not trying to add ourself to the chat
    const requestOptions = {
      method: 'Post',
      headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
      body: JSON.stringify({ UserName: newFriend.id, NickName: newNickName, Server: newServer })
    };
    const anotherRes = await fetch('http://' + consts.myServer + '/api/addConversation', requestOptions);
    let res = anotherRes.text();
    if (anotherRes.status == 201) {
      if (res == "inValid") {
        setErrorMessages({ name: "uname", message: errors.inValid });
        setdisplayError('block');
      } else if (res == "yourself") {
        setErrorMessages({ name: "uname", message: errors.yourSelf });
        setdisplayError('block');
      } else if (res == "alreadyExists") {
        setErrorMessages({ name: "uname", message: errors.alreadyExists });
        setdisplayError('block');
      }
    }


    friends.push(newFriend);
    setNameId("");
    setServer("");
    setNick("");
    if (isOur === true) {
      immediateSennFriend(user.id, nameId, user.name);
    }
  }
  //the setLast function to set the last message the its time
  function setLast(message, time) {
    friend[0].lastMessage = message;
    setMessage(message);
    friend[0].lastTime = time;
    setTime(time);
  }

  const [connection, setConnection] = useState();
  var check = useLocation().state
  var register;




  const registerToListener = async (userName) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://" + consts.myServer + "/MessagesHub")
        .configureLogging(LogLevel.Information)
        .build();
      await connection.start();
      await connection.invoke("registerToListener", { userName });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  }


  const newRegister = async (userName) => {
    try {
      await connection.invoke("newRegister", { userName });
    } catch (e) {
      console.log(e);
    }
  }

  const immediateSennFriend = async (userName, remoteUserName, nickname) => {
    try {
      await connection.invoke("immediateSennFriend", { userName, remoteUserName, nickname });
    } catch (e) {
      console.log(e);
    }
  }

  const registerToAllGrouop = async (userName) => {
    try {
      await connection.invoke("registerToAllGrouop", { userName })
      await connection.invoke("registerToListener", { userName });

    } catch (e) {
      console.log(e);
    }
  }

  const immediateSeenMessage = async (message, remoteUserName, userName, x) => {
    try {
      await connection.invoke("immediateSeenMessage", { message, remoteUserName, userName, x });
    }
    catch (e) {
      console.log(e);
    }
  }

  const addRegister = async (remoteUser) => {
    try {
      await connection.invoke("addRegister", remoteUser);
    } catch (e) {
      console.log(e);
    }
  }
  if (connection) {
    connection.on("newRegisterUser", (remoteUser) => {
      addRegister(remoteUser);
    })
  }
  if (check !== null) {
    register = check.data;
    if (register === true) {
      if (connection) {
        registerToAllGrouop(user.id);
        newRegister(user.id);
      }
    }
  }
  return (

    <div className="background" >
      <div className="container">
        <div className="ContactScreen" >
          <MemberInfo user={user} />
          <Search doSearch={doSearch} />
          <ContactsListResult friends={displayFriendsList} setFriends={setDisplayFriendsList} changeFriend={setFriend} user={user} connection={connection} registerToAllGrouop={registerToAllGrouop} setLast={setLast} />
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