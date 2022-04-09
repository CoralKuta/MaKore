
import { Link } from "react-router-dom";

function ContactsComp(contact) {
    return (
        <div tabIndex={"1"} className="list-group-item list-group-item-action" >
            <Link to={`/chats/${contact.nameCon}`}>
                <div className="img"> <img src={contact.image} className="rounded-circle" width="40px" alt=""></img></div>
                <h4 className="ContractName">{contact.nameCon} </h4>
                {contact.time !== 0 ? <div className="time">{contact.time}</div> : null}
                {contact.massage !== "" ? <div className="LastMassage">{contact.massage}</div> : null}
                {contact.noti !== 0 ? <div className="Notification">{contact.noti}</div> : null}
            </Link>
        </div>
    );
}

export default ContactsComp;
