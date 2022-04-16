
function ContactsComp(props) {
    var friend = [props[0], props[1]];
    var friendData = friend[0];
    var friendChat = friend[1];

    


    const change = () => {
        props.changeFriend(friend)
    }
    

    return (
        <div type="button" className="block" onClick={change}>
        <div className="img"> <img src={friendData.pic} className="rounded-circle" width="40px" alt=""></img></div> 
        <div className="details"> 
            <div className="Head"> 
                <h4 className="ContractName">{friendData.Username} </h4> 
                {friendData.lastTime !== 0 ? <p className="time">{friendData.lastTime}</p> : null} 
            </div> 
            <div className="LastMessage"> 
                {friendData.lastMessage !== "" ? <p>{friendData.lastMessage}</p> : null} 
                {friendData.noti !== 0 ? <b className ="notification">{friendData.noti}</b> : null} 
            </div> 
        </div> 
        </div>
    );
}

export default ContactsComp;

