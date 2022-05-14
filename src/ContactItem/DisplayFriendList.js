import { useEffect, useState } from 'react';
import pic from '../images/footer.png'
//this component display the friends list (the left side of the chat)
function DisplayFriendList(props) {
    var friendData = props.friend;
    var originFriend = null;
    const [messages, setMessages] = useState([]);
    const getAnswer = async () => {
        const requestOptions = {
            method: 'get',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('myTokenName'), 'Content-Type': 'application/json' },
          };
        const res = await fetch('http://localhost:5018/api/contacts/'+friendData.id+'/messages', requestOptions);
        const data = await res.json();
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

    return (
        <div type="button" className="block" onClick={change}>
            <div className="img"> <img src={pic} className="rounded-circle" width="40px" alt=""></img></div>
            <div className="details">
                <div className="Head">
                    <h4 className="ContractName">{friendData.id} </h4>
                    {friendData.lastTime !== "" ? <p>{friendData.lastDate}</p> : null}
                </div>
                <div className="LastMessage">
                    {friendData.lastMessage !== "" ? <p> {friendData.last}</p> : null}
                    {/*{friendData.noti !== 0 ? <b className="notification">{friendData.noti}</b> : null}*/}
                </div>
            </div>
        </div>
    );
}

export default DisplayFriendList;

