
import pic from '../images/footer.png'
//this component display the user information on the top of the left side of the chat screen
function MemberInfo(props) {
  return (
    <div className="MemmberInfo">
      <div className="img"> <img src={pic} className="rounded-circle" width="40px" alt=""></img></div>
      <div className="Name" id="MemberName">
        <h4>{props.user.id}</h4>
      </div>
      <div className="NickName">{props.user.name}</div>
      <a type="button" className="bi-bar-chart-line" href='http://localhost:5018/Ratings'> </a>
      <a type="button" className="bi-person-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
      </div>
  );
}
export default MemberInfo;