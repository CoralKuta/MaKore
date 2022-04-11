import ContactsComp from "../ContactItem/Contacts.js";


function ContactsListResult(props) {


  const changeFriend = (contact) => {
    props.changeFriend(contact);
  }


    const contactList = props.contacts.map((contact, key) => {
        
        return <ContactsComp {...contact} key = {key} changeFriend = {changeFriend} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;