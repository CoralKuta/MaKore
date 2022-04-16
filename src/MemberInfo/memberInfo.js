function MemberInfo(props) {
    return (
        <div>
          <div className="img"> <img src={props.user.pic}  className="rounded-circle" width="40px" alt=""></img></div>
          <div className="Name" id="MemberName">
            <h4>{props.user.Username}</h4>
          </div>
          <div className="NickName">{props.user.Nickname}</div> 
      </div>
    );
}
export default MemberInfo;