
//this component display the friends list (the left side of the chat)
function DisplayFriendList(props) {


    var friend = [props[0], props[1]];
    var friendData = friend[0];
    var originFriend = null;
    //find the friend that we are want to display
    for (var i = 0; i < props.originFriendsList.length; i++) {
        if (props.originFriendsList[i][0].Username == friendData.Username) {
            originFriend = props.originFriendsList[i];
        }
    }

    //the change method that change the chat we are displaying by clicking and restets the notification(if there are some)
    const change = () => {
        friendData.noti = 0;
        props.changeFriend(friend);
    }

    return (
        <div type="button" className="block" onClick={change}>
            <div className="img"> <img src={friendData.pic} className="rounded-circle" width="40px" alt=""></img></div>
            <div className="details">
                <div className="Head">
                    <h4 className="ContractName">{friendData.Username} </h4>
                    {friendData.lastTime !== "" ? <p>{friendData.lastTime}</p> : null}
                </div>
                <div className="LastMessage">
                    {friendData.lastMessage !== "" ? <p> {friendData.lastMessage}</p> : null}
                    {friendData.noti !== 0 ? <b className="notification">{friendData.noti}</b> : null}
                </div>
            </div>
        </div>
    );
}

export default DisplayFriendList;

