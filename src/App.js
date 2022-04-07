import './Contracts.css';
import contacts from './ContactItem/contactsList';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUp.css';
import img from './img.jpeg';


function App() {
  const [contractList, setContractList] = useState(contacts);
  const [buttonPopup, setButtonPopup] = useState(false);
  const doSearch = function (searchName) {
    setContractList(contacts.filter((contact) => contact.name.includes(searchName)));
  } 
  const[nameId, setNameId] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault();
    const time = '';
    const LastMassage = '';
    const noti = 0;
    const contact11 = {image : img,name : nameId, time: time,massage: LastMassage,noti: noti};
    if(nameId) {
      setContractList(ls=> [...ls, contact11])
      setNameId("");
      setButtonPopup(false);
    }
  }
  return (
    <div className="background">
      <div className="container">
        <div className="ContactScreen">
          <div className="MemmberInfo">
            <MemberInfo />
            <button onClick={() => setButtonPopup(true)} type="button" className="bi bi-person-plus"></button>
          </div>
          <div className="searchChat">
            <Search doSearch={doSearch} />
          </div>
          <ContactsListResult contacts={contractList} />
        </div>
        <div className="ChatScreen"></div>
      </div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
      <span className="addContact">Add new contact</span>
      <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
              <input type="contact" className="form-control" value={nameId} onChange={(e)=> setNameId(e.target.value)} id="floatingInput"></input>
              <label htmlFor="floatingInput">Contact's identifier</label>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
      </form>
      </PopUp>
    </div>
  );
}

export default App;