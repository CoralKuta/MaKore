import { useEffect, useReducer } from "react";
import DisplayFriendList from "../ContactItem/DisplayFriendList.js";

//the component that contains the left side of the chat
function ContactsListResult(props) {
  const a = props.friends;
  //the change method that change the chat by clicking
  const changeFriend = (friend) => {
    props.changeFriend(friend);
  }

  let contactList;

  useEffect(() => {
  const setErrorMessages = (name, message) => {
    props.setErrorMessages(name, message);
}
  setErrorMessages("", "");
  });

    //goes all over the friend that the user has and call the display component to display them on the left side of the chat screen
      contactList = a.map((friend, key) => {
        return <DisplayFriendList {...friend} key = {key} changeFriend = {changeFriend}  originFriendsList = {props.originFriendsList} user = {props.user} />
    });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;