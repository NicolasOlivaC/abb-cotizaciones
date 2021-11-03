import React from 'react'


const Modal = ({setShow}) => {

    const handleShow = (e) =>{
        e.preventDefault();
        window.location.reload(true)
    }
    return (

        <>

            <div className="modalContainer" role="document">
                <div className="modalContent">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Cotización enviada correctamente!</h5>
                    </div>
                    <div className="modal-body">
                        Ticket de cotización: XXXX-XXXX-XXXX-XXXX
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger mx-auto" onClick={handleShow} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>

        </>

    )
}



export default Modal
