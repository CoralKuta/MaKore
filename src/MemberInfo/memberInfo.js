
//this component display the user information on the top of the left side of the chat screen
function MemberInfo(props) {
  return (
    <div className="MemmberInfo">
      <div className="img"> <img src={props.user.pic} className="rounded-circle" width="40px" alt=""></img></div>
      <div className="Name" id="MemberName">
        <h4>{props.user.Username}</h4>
      </div>
      <div className="NickName">{props.user.Nickname}</div>
      <a type="button" className="bi-person-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
      </div>
  );
}
export default MemberInfo;