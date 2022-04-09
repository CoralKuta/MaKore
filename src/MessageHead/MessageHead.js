import { useParams, useLocation } from "react-router-dom";

const MessageHead = () => {
    const { name } = useParams();
    const { contact } = useLocation().state;
    console.log(name);
    console.log(contact);
    return (
        <div className="MemmberInfo">
            <div className="chat-image"> <img src={contact.image} className="rounded-circle" width="40px" alt=""></img></div>
            <div className="chat-Name" id="MemberName">
                <h4>{contact.nameCon}</h4>
            </div>
            <div className="NickName">Idodo</div>
        </div>
    );
}

export default MessageHead;