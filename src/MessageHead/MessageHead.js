
import ConversationComponent from "../conversationComponent/ConversationComponet";


const MessageHead = (props) => {
    const contact = props.friend;
    if(typeof contact.Username === "undefined") {
        return (<div></div>);
    }
    for (let i = 0; i < document.getElementsByClassName("ContractName").length; i++) {
        if(contact.Username === document.getElementsByClassName("ContractName")[i].innerText) {
            document.getElementsByClassName("block")[i].style.background = "#f4f4f4";
            if(typeof document.getElementsByClassName("block")[i].getElementsByClassName("details")[0].getElementsByClassName("LastMassage")[0].getElementsByClassName("notification")[0] !== "undefined") {
                document.getElementsByClassName("block")[i].getElementsByClassName("details")[0].getElementsByClassName("LastMassage")[0].getElementsByClassName("notification")[0].innerText = 0;
                document.getElementsByClassName("block")[i].getElementsByClassName("details")[0].getElementsByClassName("LastMassage")[0].getElementsByClassName("notification")[0].style.display = "none";
            }
        }
        else
            document.getElementsByClassName("block")[i].style.background = "white";
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