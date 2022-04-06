
function ContactsComp(contact) {
    return (
        <button type="button" className="list-group-item list-group-item-action">
            <div className="img"> <img src={contact.image} className="rounded-circle" width="40px" alt=""></img></div>
            <h4 className="ContractName">{contact.name} </h4>
            <div className="time">{contact.time}</div>
            {contact.massage !== '' ? <div className="LastMassage">{contact.massage}</div> : null}
            {contact.noti !== 0 ? <div className="Notification">{contact.noti}</div> : null}
          </button>
    );
}

export default ContactsComp;
