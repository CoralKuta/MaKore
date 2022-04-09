import './Contracts.css';
import contacts from './ContactItem/contactsList';
import members from './ContactItem/members';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUp.css';
import img from './img.jpeg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessageHead from './MessageHead/MessageHead';


function ChatScreen() {
  const [contractList, setContractList] = useState(contacts);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const doSearch = function (searchName) {
    setContractList(contacts.filter((contact) => contact.nameCon.includes(searchName)));
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
    const time = '';
    const LastMassage = '';
    const noti = 0;
    const contactIdentifier = members.find((user) => user.nameCon === nameId);
    const checkExists = contacts.find((user) => user.nameCon === nameId);
    const contact11 = { image: img, nameCon: nameId, time: time, massage: LastMassage, noti: noti };
    const memberName = document.getElementById("MemberName");
    if (contactIdentifier && !checkExists && (memberName.innerText !== nameId)) {
      contacts.push(contact11);
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

  return (
      <div className="background" >
        <div className="container">
          <div className="ContactScreen" >
            <div className="MemmberInfo">
              <MemberInfo />
              <button onClick={() => setButtonPopup(true)} type="button" className="bi bi-person-plus"></button>
            </div>
            <div className="searchChat">
              <Search doSearch={doSearch} />
            </div>
            <ContactsListResult contacts={contractList} />
          </div>
          <div className="ChatScreen">
            <Routes>
              <Route exact path="/chats/:name" element={<MessageHead />} />
            </Routes>
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

export default ChatScreen;

