import React from 'react'
import { changeCotizationStatus } from '../../helpers/funcionality';


const ButtonChangeStatus = ({ID}) => {
    return (
        <div className="mt-5 d-flex justify-content-center">
            <button className="btn btn-success mx-3" onClick={() => changeCotizationStatus(0, ID)}>Aceptar</button>
            <button className="btn btn-danger mx-3" onClick={() => changeCotizationStatus(1, ID)}>Rechazar</button>
        </div>
    )
}

export default ButtonChangeStatus
