import { useState } from 'react';


function DisplayFriendList(props) {


    var friend = [props[0], props[1]];
    var friendData = friend[0];
    var originFriend=null;
        for (var i = 0; i < props.originFriendsList.length; i++) {
            if (props.originFriendsList[i][0].Username == friendData.Username) {
                originFriend = props.originFriendsList[i];
            }
        }



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
                    {(((originFriend != null) || (typeof originFriend !== "undefined")) && (originFriend[1].length >= 1)) ? <p>{originFriend[1][originFriend[1  ].length - 1].props.content[2]}</p> : null}
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

