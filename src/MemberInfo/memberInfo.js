function MemberInfo(props) {
    return (
        <div>
          <div className="img"> <img src={props.member.pic}  className="rounded-circle" width="40px" alt=""></img></div>
          <div className="Name" id="MemberName">
            <h4>{props.member.Username}</h4>
          </div>
          <div className="NickName">{props.member.Nickname}</div> 
      </div>
    );
}
export default MemberInfo;