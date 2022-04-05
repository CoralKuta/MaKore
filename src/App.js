import './Contracts.css';
import contacts from './ContactItem/contactsList';
import Search from './Search/Search.js'
import img from './img.jpeg';
import { useState } from 'react';
import ContactsListResult from './ContactsListResult/ContactsListResult';

function App() {

  const [contractList, setContractList] = useState(contacts);

  const doSearch = function(searchName) {
    setContractList(contacts.filter((contact) => contact.name.includes(searchName)));
  }

  return (
    <div className="background">
    <div className="container">
      <div className="ContactScreen">
        <div className="MemmberInfo">
          <div className="img"> <img src={img}  className="rounded-circle" width="40px" alt=""></img></div>
          <div className="Name">
            <h4>Ido Tavron</h4>
          </div>
          <div className="NickName"> Idodo</div>
          <button type="button" className="bi bi-person-plus"></button>
        </div>
        <div className="searchChat">
          <Search doSearch={doSearch} />
        </div>
        <ContactsListResult contacts={contractList}/>
      </div>
      <div className="ChatScreen"></div>
    </div>
  </div>
  );
}

export default App;