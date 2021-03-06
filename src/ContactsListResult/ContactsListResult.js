import DisplayFriendList from "../ContactItem/DisplayFriendList.js";

//the component that contains the left side of the chat
function ContactsListResult(props) {

  //the change method that change the chat by clicking
  const changeFriend = (friend) => {
    props.changeFriend(friend);
  }


    //goes all over the friend that the user has and call the display component to display them on the left side of the chat screen
    const contactList = props.friends.map((friend, key) => {
        
        return <DisplayFriendList {...friend} key = {key} changeFriend = {changeFriend}  originFriendsList = {props.originFriendsList} user = {props.user} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;