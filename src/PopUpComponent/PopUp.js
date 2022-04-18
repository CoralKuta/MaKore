import React from 'react'
import './PopUp.css'


function PopUp(props) {

    const renderErrorMessage = (name) =>
        name === props.errorMessages.name && (
            <div className="error">{props.errorMessages.message}</div>
        );

    return (props.trigger) ? (
        <div className="popUp">
            <div className="popUp-inner" onClick={props.hideErrors}>
                <button onClick={() => { props.setTrigger(false); props.setNameId(""); }} type="button" className="bi-x"></button>
                <span className="addContact">Add new contact</span>
                <form className="form" onSubmit={props.handleSubmit}>
                    <div className="form-floating mb-3">
                        <label htmlFor="floatingInput" className='form-label'>Contact's identifier</label>
                        <input type="contact" className="form-control" value={props.nameId} onChange={(e) => props.setNameId(e.target.value)} id="floatingInput"></input>
                        {renderErrorMessage("uname")}
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                    <div className="errorOnSubmit" style={{ 'display': props.displayError }}>
                        {renderErrorMessage("wrong")}</div>
                </form>
            </div>
        </div>
    ) : "";
}

export default PopUp;