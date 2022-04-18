import DisplayFriendList from "../ContactItem/DisplayFriendList.js";


function ContactsListResult(props) {

  const changeFriend = (friend) => {
    props.changeFriend(friend);
  }



    const contactList = props.friends.map((friend, key) => {
        
        return <DisplayFriendList {...friend} key = {key} changeFriend = {changeFriend}  originFriendsList = {props.originFriendsList} />
      });

    return (
        <div className="list-group">
        {contactList}
      </div>
    );
}

export default ContactsListResult;