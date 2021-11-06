import React, {useState} from 'react'
import { Link} from "react-router-dom";

import FirstPlace from './firstPlace';

const MenuSelect = props => {

    const [seguimiento, setSeguimiento] = useState('')
    const handleChange = (e) =>{
        setSeguimiento(e.target.value)
    }


    return (
        <>
            <FirstPlace />
            <div className="containerSelect ">
                <div className="containerSelect1 mt-5 mb-5">
                    <h4>Sigue el estado de tu cotización.</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={seguimiento} onChange={handleChange} placeholder="XXXX-XXXX-XXXX-XXXX"/>
                        <div className ="input-group-append">
                        <Link className="btn btn-danger" to={`/demo/${seguimiento}`}>Buscar</Link>
                        </div>
                    </div>
                    <span className="mb-3">o...</span>
                    <a href="/cotizacion/">Realiza una cotización con nosotros!</a>
                </div>
            </div>
        </>
    )
}


export default MenuSelect
