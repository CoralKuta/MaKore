import './Chat.css';
import members from './contacts';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUp.css';
import img from './img.jpeg';
import { useLocation } from 'react-router-dom';
import MessageHead from './MessageHead/MessageHead';
import { render } from '@testing-library/react';


function Chat() {
  const member = useLocation().state.data;
  const contacts = member.friends;

  const [friend, setFriend] = useState({});
  const [contactList, setcontactList] = useState(contacts);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const doSearch = function (searchName) {
    setcontactList(contacts.filter((contact) => contact.Username.includes(searchName)));
  }

  const [displayError, setdisplayError] = useState('none');


  const [message, setMessage] = useState(friend.massage);

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
    var today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    const LastMassage = '';
    const noti = 0;
    const contactIdentifier = members.find((user) => user.Username === nameId);
    const checkExists = contacts.find((user) => user.Username === nameId);

    for (var i = 0; i < members.length; i++) {
      if (members[i].Username == nameId) {
        var newContactName = members[i].Username;
        var NewContactNickName = members[i].Nickname;
        var NewContactPassword = members[i].password;
        var NewContactPic = members[i].pic;
        var newContactFriends = members[i].friends;
      }
    }

    const newFriend = {
      Username: newContactName, Nickname: NewContactNickName, password: NewContactPassword,
      pic: NewContactPic, friends: newContactFriends, time: time, massage: LastMassage, noti: noti
    };

    const memberName = document.getElementById("MemberName");

    if (contactIdentifier && !checkExists && (memberName.innerText !== nameId)) {
      contacts.push(newFriend);
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



  function setLastMassage(massage) {
    const user = contacts.find((user) => user.Username === friend.Username);
    user.massage = massage;
    setMessage(massage);
  }



  return (

    <div className="background" >
      <div className="container">
        <div className="ContactScreen" >
          <div className="MemmberInfo">
            <MemberInfo member={member} />
            <button onClick={() => setButtonPopup(true)} type="button" className="bi-person-plus"></button>
          </div>
          <div className="searchChat">
            <Search doSearch={doSearch} />
          </div>
          <ContactsListResult contacts={contactList} changeFriend={setFriend} />
        </div>
        <div className="ChatScreen">
          <MessageHead friend={friend} setLastMassage={setLastMassage}/>
        </div>
      </div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} hideErrors={hideErrors} setNameId={setNameId} >
        <span className="addContact">Add new contact</span>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="contact" className="form-control" value={nameId} onChange={(e) => setNameId(e.target.value)} id="floatingInput"></input>
            <label htmlFor="floatingInput">Contact's identifier</label>
            {renderErrorMessage("uname")}
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
          <div className="errorOnSubmit" style={{ 'display': displayError }}>
            {renderErrorMessage("wrong")}</div>
        </form>
      </PopUp>
    </div>
  );
}

export default Chat;