import {  useLocation } from "react-router-dom";
import ConversationComponent from "../conversationComponent/ConversationComponet";
const MessageHead = () => {
    const { contact } = useLocation().state;
    
    for (let i = 0; i< document.getElementsByClassName("ContractName").length; i++) {
        if(contact.nameCon === document.getElementsByClassName("ContractName")[i].innerText){
            document.getElementsByClassName("list-group-item")[i].style.background = "#ededed";
            if( document.getElementsByClassName("list-group-item")[i].querySelector('.Notification') != null) {
            document.getElementsByClassName("list-group-item")[i].querySelector('.Notification').innerText = 0;
            document.getElementsByClassName("list-group-item")[i].querySelector('.Notification').style.display = "none";
            }
            
        }
        else {
            document.getElementsByClassName("list-group-item")[i].style.background = "white";
        }
    }
    
    return (
        <div>
        <div className="MemmberInfo">
            <div className="chat-image"> <img src={contact.image} className="rounded-circle" width="40px" alt=""></img></div>
            <div className="chat-Name" id="MemberName">
                <h4>{contact.nameCon}</h4>
            </div>
            <div className="NickName">Idodo</div>
        </div>
        <ConversationComponent/>
        </div>
    );
}

export default MessageHead;