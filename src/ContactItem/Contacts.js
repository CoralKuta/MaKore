import { Link } from "react-router-dom";

function ContactsComp(contact) {

    return (
        <Link className="bbbbbbbbb" to={`/chats/${contact.Username}`} state={{ contact: contact }} >
        <div type="button" className="block">
                <div className="img"> <img src={contact.pic} className="rounded-circle" width="40px" alt=""></img></div>
                <div className="details">
                    <div className="Head">
                        <h4 className="ContractName">{contact.Username} </h4>
                        {contact.time !== 0 ? <p className="time">{contact.time}</p> : null}
                    </div>
                    <div className="LastMassage">
                        {contact.massage !== "" ? <p>{contact.massage}</p> : null}
                        {contact.noti !== 0 ? <b>{contact.noti}</b> : null}
                    </div>
                </div>
        </div>
        </Link>
    );
}

export default ContactsComp;
