import img from './img.jpeg';


function MemberInfo() {

    return (
        <div>
          <div className="img"> <img src={img}  className="rounded-circle" width="40px" alt=""></img></div>
          <div className="Name">
            <h4>Ido Tavron</h4>
          </div>
          <div className="NickName">Idodo</div>
      </div>
    );
}
export default MemberInfo;