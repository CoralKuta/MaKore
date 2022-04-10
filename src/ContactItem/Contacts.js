import { Link } from "react-router-dom";

function ContactsComp(contact) {

    return (
        <button type="button" className="list-group-item list-group-item-action">
            <Link className="bbbbbbbbb" to={`/chats/${contact.Username}`} state={{ contact: contact }} >
                <div className="img"> <img src={contact.pic} className="rounded-circle" width="40px" alt=""></img></div>
                <h4 className="ContractName">{contact.Username} </h4>
                {contact.time !== 0 ? <div className="time">{contact.time}</div> : null}
                {contact.massage !== "" ? <div className="LastMassage">{contact.massage}</div> : null}
                {contact.noti !== 0 ? <div className="Notification">{contact.noti}</div> : null}
            </Link>
        </button>
    );
}

export default ContactsComp;
