import DisplayFriendList from "../ContactItem/DisplayFriendList.js";
import { useState } from 'react'
import consts from '../consts.js'
//the component that contains the left side of the chat
function ContactsListResult(props) {
  const friends = props.friends;
  const [renders, setRenders] = useState(true);
  if (typeof props.connection !== "undefined") {
    props.registerToAllGrouop(props.user.id);
    props.connection.on("ReciveFriend", (remoteUser, NickName, userName) => {
      var isExsits = false;
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === remoteUser) {
          isExsits = true;
        }
      }
      if (isExsits === false && props.user.id === userName) {
        friends.push({ id: remoteUser, name: NickName, server: consts.myServer, last: "", lastDate: "" })
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

<<<<<<< HEAD
    //goes all over the friend that the user has and call the display component to display them on the left side of the chat screen
    const contactList = props.friends.map((friend, key) => {
        return <DisplayFriendList {...friend} key = {key} changeFriend = {changeFriend}  originFriendsList = {props.originFriendsList} user = {props.user} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
=======
  return (
    <div className="list-group">
      {contactList}
    </div>
  );
>>>>>>> 9c92051d8b8560d457efdef750fe62dc94626c66
}

export default ContactsListResult;