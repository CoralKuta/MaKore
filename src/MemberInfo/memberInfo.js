import img from './img.jpeg';
import members from '../ContactItem/members';

function MemberInfo() {

    return (
        <div>
          <div className="img"> <img src={img}  className="rounded-circle" width="40px" alt=""></img></div>
          <div className="Name" id="MemberName">
            <h4>{members[9].nameCon}</h4>
          </div>
          <div className="NickName">Idodo</div> 
      </div>
    );
}
export default MemberInfo;