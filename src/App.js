import './Contracts.css';
import contacts from './ContactItem/contactsList';
import Search from './Search/Search.js'
import MemberInfo from './MemberInfo/memberInfo';
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
        <MemberInfo />
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