import React from 'react'

const Pm = props => {

    const fakeData = { nombre: "jhon", apellido: "Doe", email: "jhon@doe.com", telefono: 962203194 }

    return (
        <div className="mt-3">
            <h4>Solicitud de cotización - Fecha de ingreso: xx/xx/xx - Última actualización: xx/xx/xx</h4>
            <h5>Estado: xx</h5>

            <div className="divisor">
                <div className="w-50 h-auto">
                    <h4 className="mt-3 text-center">Datos personales</h4>
                    <table className="table table-bordered ">
                        <tbody>
                            <tr>
                                <td className="w-25">Nombre</td>
                                <td className="w-25">{fakeData.nombre}</td>
                            </tr>
                            <tr>
                                <td className="w-25">Apellido</td>
                                <td className="w-25">{fakeData.apellido}</td>
                            </tr>
                            <tr>
                                <td className="w-25">Empresa</td>
                                <td className="w-25">Empresa genial</td>
                            </tr>
                            <tr>
                                <td className="w-25">Email</td>
                                <td className="w-25">{fakeData.email}</td>
                            </tr>
                            <tr>
                                <td className="w-25">Telefono</td>
                                <td className="w-25">{fakeData.telefono}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-5 d-flex justify-content-center">
                        <button className="btn btn-success mx-3">Aceptar</button>
                        <button className="btn btn-danger mx-3">Rechazar</button>
                    </div>
                </div>

                <div className="w-50">
                    <h4 className="mt-3 text-center">Motor Catalog Number: xxxxx </h4>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td className="text-center align-middle">Caracteristicas</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="contentTable">
                                        <div>
                                            <li >nema_frame: xx </li>
                                            <li>Voltaje: xx</li>
                                            <li>rpm: xx</li>
                                            <li>hp: xx</li>
                                        </div>
                                        <div>
                                            <li>Disc_sym: xx</li>
                                            <li>C dim: xx</li>
                                            <li>aprx wt: xx</li>
                                            <li>Full load efficiency: xx</li>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr className="mt-5" />

            <div>
                <h4 className="mt-5 ">Indicaciones de funcionalidad</h4>
                <div className="divisor2 mb-3 px-3 py-3">
                    <span><strong>{fakeData.nombre} {fakeData.apellido} - 04/11/2021 - 13:53</strong></span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                    <span><strong>Don eduardo PM-ABB - 04/11/2021 - 13:53</strong></span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere
                    </p>
                </div>
                <div className="d-flex">
                    <button className="btn btn-danger mx-auto">Responder</button>
                </div>

            </div>

        </div>
    )
}

export default Pm
