import { useLocation } from "react-router-dom";
import ConversationComponent from "../conversationComponent/ConversationComponet";


const MessageHead = (props) => {
    const contact = props.name;

    if (contact === '') {
        return (<div></div>);
    }

    for (let i = 0; i < document.getElementsByClassName("ContractName").length; i++) {
        if (contact.Username === document.getElementsByClassName("ContractName")[i].innerText) {
            document.getElementsByClassName("block")[i].style.background = "#ededed";
            if (document.getElementsByClassName("block")[i].getElementsByClassName('.LastMassage')[1] != null) {
                document.getElementsByClassName("block")[i].getElementsByClassName('.LastMassage')[1].innerText = 0;
                document.getElementsByClassName("block")[i].getElementsByClassName('.LastMassage')[1].style.display = "none";
            }

        }
        else {
            document.getElementsByClassName("block")[i].style.background = "white";
        }
    }

    return (
        <div>
            <div className="MemmberInfo">
                <div className="chat-image"> <img src={contact.pic} className="rounded-circle" width="40px" alt=""></img></div>
                <div className="chat-Name" id="MemberName">
                    <h4>{contact.Username}</h4>
                </div>
                <div className="NickName">{contact.Nickname}</div>
            </div>
            <ConversationComponent />
        </div>
    );
}

export default MessageHead;