import { useEffect, useState } from 'react';
import pic from '../images/footer.png'
import consts from '../consts.js';



//this component display the friends list (the left side of the chat)
function DisplayFriendList(props) {
    const [renders, setRenders] = useState(true);
    var friendData = props.friend;
    var today = new Date();
    var time, fullTime;
    if (today.getMinutes() < 10) {
        time = today.getHours() + ":0" + today.getMinutes();
        fullTime = time + today.getSeconds() + today.getMilliseconds();
    }
    else {
        time = today.getHours() + ":" + today.getMinutes();
        fullTime = time + today.getSeconds() + today.getMilliseconds();
    }

    const [messages, setMessages] = useState([]);
    const getAnswer = async () => {
        const requestOptions = {
            method: 'get',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
        };
        const res = await fetch('http://' + consts.myServer + '/api/contacts/' + friendData.id + '/messages', requestOptions);
        const data = await res.json();
        data.forEach(element => {
            if (element.created.length > 6) {
                element.created = element.created.substring(11, 16);
            }
        });
        setMessages(data);
    };
    useEffect(() => {
        getAnswer();
    }, []);
    var friend = [friendData, messages];
    //the change method that change the chat we are displaying by clicking and restets the notification(if there are some)
    const change = () => {
        props.changeFriend(friend);
    }
    if (typeof props.connection !== "undefined") {
        props.connection.on("ReciveMessage", (message, unuiqeId, remoteName) => {
            if(messages !== []) {
            var isExsits = false;
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].id === unuiqeId) {
                    isExsits = true;
                }
            }
            if (isExsits === false && friendData.id === remoteName) {
                messages.push({ id: unuiqeId, content: message, created: time, sent: false });
                console.log(messages);
                setRenders(!renders);
            }
     } });
    
    }
    
    return (
        <div type="button" className="block" onClick={change}>
            <div className="img"> <img src={pic} className="rounded-circle" width="40px" alt=""></img></div>
            <div className="details">
                <div className="Head">
                    <h4 className="ContractName">{friendData.id} </h4>
                    {typeof messages[messages.length - 1] !== "undefined" ? (
                        messages[messages.length - 1].created > 5 ? <p>{messages[messages.length - 1].created}</p> :
                            <p>{messages[messages.length - 1].created}</p>) : null}
                </div>
                <div className="LastMessage">
                    {typeof messages[messages.length - 1] !== "undefined" ? <p> {messages[messages.length - 1].content}</p> : null}
                    {/*{friendData.noti !== 0 ? <b className="notification">{friendData.noti}</b> : null}*/}
                </div>
            </div>
        </div>
    );
}

export default DisplayFriendList;

