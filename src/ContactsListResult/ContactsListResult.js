import { useEffect } from "react";
import DisplayFriendList from "../ContactItem/DisplayFriendList.js";

//the component that contains the left side of the chat
function ContactsListResult(props) {
  const friends = props.friends;
  //friends.sort((a, b) => (a.lastDate.substring(11,16) < b.lastDate.substring(11,16)) ? 1 : -1);
  //setSortedList(friends);
  console.log(friends);
  useEffect(() => {
    friends.sort((a, b) => (Date.parse(a.lastDate) < Date.parse(b.lastDate)) ? 1 : -1)
    console.log(friends);
  });

  //the change method that change the chat by clicking
  const changeFriend = (friend) => {
    props.changeFriend(friend);
  }
    //goes all over the friend that the user has and call the display component to display them on the left side of the chat screen
    const contactList = friends.map((friend, key) => {
        return <DisplayFriendList friend = {friend} key = {key} changeFriend = {changeFriend}  originFriendsList = {props.originFriendsList} user = {props.user} />
    });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;