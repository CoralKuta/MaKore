import { Link } from "react-router-dom";
import MessageHead from "../MessageHead/MessageHead";

function ContactsComp(props) {

    const change = () => {
        props.changeName(props.Username)
    }

    return (
        <div type="button" className="block" onClick={change}>
        <div className="img"> <img src={props.pic} className="rounded-circle" width="40px" alt=""></img></div> 
        <div className="details"> 
            <div className="Head"> 
                <h4 className="ContractName">{props.Username} </h4> 
                {props.time !== 0 ? <p className="time">{props.time}</p> : null} 
            </div> 
            <div className="LastMassage"> 
                {props.massage !== "" ? <p>{props.massage}</p> : null} 
                {props.noti !== 0 ? <b>{props.noti}</b> : null} 
            </div> 
        </div> 
        </div>
    );
}

export default ContactsComp;

