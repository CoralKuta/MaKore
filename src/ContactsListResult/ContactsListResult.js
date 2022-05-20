import DisplayFriendList from "../ContactItem/DisplayFriendList.js";
import {useState} from 'react'
//the component that contains the left side of the chat
function ContactsListResult(props) {
  const friends = props.friends;
  const [renders, setRenders] = useState(true);
  if(typeof props.connection !== "undefined") { 
  props.registerToAllGrouop(props.user.id);
  }
  const changeFriend = (friend) => {
    props.changeFriend(friend);
  }
    //goes all over the friend that the user has and call the display component to display them on the left side of the chat screen
    const contactList = friends.map((friend, key) => {
        return <DisplayFriendList friend = {friend} key = {key} changeFriend = {changeFriend} user = {props.user} />
    });

    if(typeof props.connection !== "undefined") { 
      props.connection.on("ReciveFriend", (remoteUser, NickName) => {
        var isExsits = false;
        for(var i = 0; i < friends.length; i++){
          if(friends[i].id === remoteUser){
            isExsits = true;
          }
        }
        if(isExsits === false) {
        friends.push({id: remoteUser, name: NickName, server: "localhost:5018", last: "", lastDate: ""})
        props.setFriends(friends);
        }
        setRenders(!renders);
        console.log(friends);
    });
  }
    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;