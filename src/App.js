import './Contracts.css';
import contacts from './ContactItem/contactsList';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';
import PopUp from './PopUpComponent/PopUp';
import './PopUp.css';

function App() {

  const [contractList, setContractList] = useState(contacts);
  const [buttonPopup, setButtonPopup] = useState(false);
  const doSearch = function (searchName) {
    setContractList(contacts.filter((contact) => contact.name.includes(searchName)));
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
          <span className = "addContact">Add new contact</span>
          <form>
            <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput"></input>
            <label htmlFor="floatingInput">Contact's identifier</label>
            </div>
            <button type="Add" className="btn btn-primary">Add</button>
          </form>
        </PopUp>
    </div>
  );
}

export default App;