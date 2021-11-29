import React from 'react'



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

            
        </>
    )
}


export default ContactInformation
