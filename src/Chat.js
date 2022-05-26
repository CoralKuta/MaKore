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
  const handleSubmit = async (e) => {
    e.preventDefault();

    var newContactName = nameId;
    var newNickName = nick;
    var newServer = server;
    var newLastMessage = null;
    var newLastDate = null

    // we want to add a friend to our user. if we find the friend in "users" he is also our user. else - invitation
    const RequestOptions = {
      method: 'get',
      headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
    };
    const respp = await fetch('http://' + consts.myServer + '/api/validation/' + nameId + '/' + server, RequestOptions);
    if ((respp.status == 200) || (respp.status == 201)) {
      var resStatus = await respp.text();

      // the friend is our user - add converastion
      if (resStatus == '1') {
        const requestOptions = {
          method: 'post',
          headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
          body: JSON.stringify({ Id: newContactName, Name: newNickName, Server: newServer })
        };
        const anotherRes = await fetch('http://' + consts.myServer + '/api/contacts', requestOptions);
        
        if ((anotherRes.status == 200) || (anotherRes.status == 201)) {
          // the new friend
          const newFriend = { id: newContactName, name: newNickName, server: newServer, last: newLastMessage, lastdate: newLastDate };
          friends.push(newFriend);
          immediateSennFriend(user.id, nameId, user.name);
        }

        setNameId("");
        setServer("");
        setNick("");

      } else if (resStatus == '2') {
        setErrorMessages({ name: "uname", message: errors.alreadyExists });
        setdisplayError('block');

      } else if (resStatus == '3') {
        setErrorMessages({ name: "uname", message: errors.yourSelf });
        setdisplayError('block');

      } else if (resStatus == '4') {
        setErrorMessages({ name: "uname", message: errors.inValid });
        setdisplayError('block');
      } else {
        // INVIATATION
        // wait. takes awhile
        setErrorMessages({ name: "uname", message: errors.wait });
        setdisplayError('block');

        const ro = {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: user.id, to: newContactName, Server: consts.myServer })
        };

        try {
          const a = await fetch('http://' + server + '/api/invitations', ro);
          if (a.status == 201) {
            setErrorMessages({ name: "uname", message: errors.invitations });
            setdisplayError('block');

            const requestOptions = {
              method: 'Post',
              headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
              body: JSON.stringify({ UserName: newContactName, NickName: newNickName, Server: newServer })
            };
            const anotherRes = await fetch('http://' + consts.myServer + '/api/addConversation', requestOptions);
            if ((anotherRes.status == 200) || (anotherRes.status == 201)) {
              // the new friend
              const newFriend = { id: newContactName, name: newNickName, server: newServer, last: newLastMessage, lastdate: newLastDate };
              friends.push(newFriend);
              setNameId("");
              setServer("");
              setNick("");
            }
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

  const registerToAllGroup = async (userName) => {
    try {
      await connection.invoke("registerToAllGroup", { userName })
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
        registerToAllGroup(user.id);
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
          <ContactsListResult friends={displayFriendsList} setFriends={setDisplayFriendsList} changeFriend={setFriend} user={user} connection={connection} registerToAllGroup={registerToAllGroup} setLast={setLast} />
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