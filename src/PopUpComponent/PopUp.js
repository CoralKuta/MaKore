import React from 'react'
import '../PopUp.css'


function PopUp(props) {

    return ( props.trigger) ? (
        <div className="popUp">
            <div className="popUp-inner" onClick = {props.hideErrors}>
                <button onClick={() => {props.setTrigger(false); props.setNameId("");}} type="button" className="bi-x"></button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopUp;