import React from 'react'
import { changeCotizationStatus } from '../../helpers/funcionality';


const ContactInformation = ({data, ID}) => {
    return (
        <>
            <h4 className="mt-3 text-center">Datos personales</h4>
            <table className="table table-bordered bg-white">
                <tbody>
                    <tr>
                        <td className="w-25">Nombre</td>
                        <td className="w-25">{data.nombre}</td>
                    </tr>
                    <tr>
                        <td className="w-25">Apellido</td>
                        <td className="w-25">{data.apellido}</td>
                    </tr>
                    <tr>
                        <td className="w-25">Empresa</td>
                        <td className="w-25">{data.empresa}</td>
                    </tr>
                    <tr>
                        <td className="w-25">Email</td>
                        <td className="w-25">{data.correo}</td>
                    </tr>
                    <tr>
                        <td className="w-25">Telefono</td>
                        <td className="w-25">{data.telefono}</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-5 d-flex justify-content-center">
                <button className="btn btn-success mx-3" onClick={() => changeCotizationStatus(0, ID)}>Aceptar</button>
                <button className="btn btn-danger mx-3" onClick={() => changeCotizationStatus(1, ID)}>Rechazar</button>
            </div>
        </>
    )
}


export default ContactInformation
