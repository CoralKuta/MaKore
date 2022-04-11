import ContactsComp from "../ContactItem/Contacts.js";


function ContactsListResult(props) {

    const contactList = props.contacts.map((contact, key) => {
        
        return <ContactsComp {...contact} key = {key} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;