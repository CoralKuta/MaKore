import ContactsComp from "../ContactItem/Contacts.js";


function ContactsListResult(props) {


  const changeName = (contact) => {
    props.changeName(contact);
  }


    const contactList = props.contacts.map((contact, key) => {
        
        return <ContactsComp {...contact} key = {key} changeName = {changeName} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;