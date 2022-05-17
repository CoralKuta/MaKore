
import ConversationComponent from "../conversationComponent/ConversationComponet";
import pic from '../images/footer.png'

const MessageHead = (props) => {
    var friend = props.friend; 
    var friendData = friend[0];


    //setting the last massage and time on the appropriate chat
    const setLast = (message, time) => {
        props.setLast(message, time);
    }

    //if there is not selected any chat yet we dont want to show screen
    if ((friendData == null) || (typeof friendData.id === "undefined")) {
        return (<div></div>);
    }

    //this loop change the background of a chat by clicking on it, to show that this is the selected chat
    for (let i = 0; i < document.getElementsByClassName("ContractName").length; i++) {
        if(friendData.Username === document.getElementsByClassName("ContractName")[i].innerText) 
            document.getElementsByClassName("block")[i].style.background = "#f4f4f4";
        else
            document.getElementsByClassName("block")[i].style.background = "white";
    }

    return (
        <div>
            <div className="MemmberInfo">
                <img src={pic} className="rounded-circle" width="40px" alt=""></img>
                <div className="chat-Name" id="MemberName">
                    <h4>{friendData.id}</h4>
                </div>
                <div className="NickName">{friendData.name}</div>
            </div>
            <ConversationComponent friend={friend} setLast={setLast} user={props.user} seenMessage = {props.seenMessages}/>
        </div>
    );
}

export default MessageHead;