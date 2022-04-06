import React from 'react'
import '../PopUp.css'

function PopUp(props) {
    return ( props.trigger) ? (
        <div className="popUp">
            <div className="popUp-inner">
                <button onClick={() => props.setTrigger(false)} type="button" className="bi bi-x"></button>
                { props.children }
            </div>
        </div>

    ) : "";
}

export default PopUp;