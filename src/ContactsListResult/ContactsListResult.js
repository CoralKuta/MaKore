import DisplayFriendList from "../ContactItem/DisplayFriendList.js";
import { useState } from 'react'
import consts from '../consts.js'
//the component that contains the left side of the chat
function ContactsListResult(props) {
  const friends = props.friends;
  const [renders, setRenders] = useState(true);
  if (typeof props.connection !== "undefined") {
    props.registerToAllGroup(props.user.id);
    props.connection.on("ReciveFriend", (remoteUser, NickName, userName) => {
      var isExsits = false;
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === remoteUser) {
          isExsits = true;
        }
      }
      if (isExsits === false && props.user.id === userName) {
        friends.push({ id: remoteUser, name: NickName, server: consts.myServer, last: null, lastdate: null })
        props.setFriends(friends);
      }
      setRenders(!renders);
    });
  }
  const changeFriend = (friend) => {
    props.changeFriend(friend);
  }
  
  const contactList = friends.map((friend, key) => {
    return <DisplayFriendList friend={friend} key={key} changeFriend={changeFriend} user={props.user} connection={props.connection}/>
  });

  return (
    <div className="list-group">
      {contactList}
    </div>
  );
}

export default ContactsListResult;