import DisplayFriendList from "../ContactItem/DisplayFriendList.js";
import { useState } from 'react'
//the component that contains the left side of the chat
function ContactsListResult(props) {
  console.log(props);
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
      if (isExsits === false && userName === props.user.id) {
        friends.push({ id: remoteUser, name: NickName, server: "localhost:5018", last: "", lastDate: "" })
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