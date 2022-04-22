import React from 'react'


//this is the popup component that take care of the add new contact to the chat screen
function PopUp(props) {


    // this function displaying the error when it occurs
    const renderErrorMessage = (name) =>
        name === props.errorMessages.name && (
            <div className="error">{props.errorMessages.message}</div>
        );

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={props.hideErrors}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { props.setNameId(""); }}></button>
                    </div>
                    <div className="modal-body">
                        <form className="form" onSubmit={props.handleSubmit}>
                            <div className="form-floating mb-3">
                                <div className="form-floating mb-3">
                                    <input type="contact" className="form-control" id="floatingInput" value={props.nameId} onChange={(e) => props.setNameId(e.target.value)}></input>
                                    <label htmlFor="floatingInput">Contact's identifier</label>
                                </div>
                                {renderErrorMessage("uname")}
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                            <div className="errorOnSubmit" style={{ 'display': props.displayError }}>
                                {renderErrorMessage("wrong")}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PopUp;