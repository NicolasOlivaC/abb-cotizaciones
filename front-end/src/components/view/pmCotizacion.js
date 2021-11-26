import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const Pm = props => {

    const [data, setData] = useState(null)
    const params = useParams();

    useEffect(() => {
        const local = process.env.REACT_APP_LOCAL_HOST
        axios.get(`${local}/obtainDataCotizacion/${params.ID}`)
            .then((received) => {
                // console.log(received)
                setData([received.data[0], received.data[1], received.data[2]])
            })
            .catch(error => {
                setData({ message: error.response.data.error })
            })
    }, [])

    if (data === null || data?.message) {
        return (

            <>
                {data === null ? <h1 className="mt-5">Loading...</h1> : <h1 className="mt-5">{data.message}</h1>}
            </>

        )
    }

    else {
        return (
            <div className="my-5 border bg-light px-3 py-3">
                <h5>Solicitud de cotización - Fecha de ingreso: {data[0]?.fecha_ingreso} - Última actualización: {data[0]?.fecha_update}</h5>
                <h5>Estado: {data[0]?.estado}</h5>

                <div className="divisor ">
                    <div className="w-50 h-auto ">
                        <h4 className="mt-3 text-center">Datos personales</h4>
                        <table className="table table-bordered bg-white">
                            <tbody>
                                <tr>
                                    <td className="w-25">Nombre</td>
                                    <td className="w-25">{data[0]?.nombre}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Apellido</td>
                                    <td className="w-25">{data[0]?.apellido}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Empresa</td>
                                    <td className="w-25">{data[0]?.empresa}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Email</td>
                                    <td className="w-25">{data[0]?.correo}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Telefono</td>
                                    <td className="w-25">{data[0]?.telefono}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-5 d-flex justify-content-center">
                            <button className="btn btn-success mx-3">Aceptar</button>
                            <button className="btn btn-danger mx-3">Rechazar</button>
                        </div>
                    </div>

                    <div className="w-50">
                        <h4 className="mt-3 text-center">Motor Catalog Number: {data[1][0]?.catalog_number} </h4>
                        <table className="table table-bordered bg-white">
                            <thead>
                                <tr>
                                    <td className="text-center align-middle">Caracteristicas</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {data[1].map((item,indice) =>
                                            <div key = {indice} className="contentTable">
                                                <div>
                                                    <li >nema_frame: {item.nema_frame} </li>
                                                    <li>Voltaje: {item.voltag}</li>
                                                    <li>rpm: {item.rpm}</li>
                                                    <li>hp: {item.hp}</li>
                                                </div>
                                                <div>
                                                    <li>Disc_sym: {item.Dysc_sym}</li>
                                                    <li>C dim: {item.c_dim}</li>
                                                    <li>aprx wt: {item.aprx_wt}</li>
                                                    <li>Full load efficiency: {item.full_load_efficiency}</li>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="mt-5" />

                <div>
                    <h4 className="mt-5 ">Indicaciones de funcionalidad</h4>
                    <div className="divisor2 mb-3 px-3 py-3 bg-white">

                        {data?.answ ? data?.answ.map((elemento, indice) =>
                            <div key={indice}>
                                <span><strong>{elemento.por} - {elemento.fecha} </strong></span>
                                <p>{elemento.pregunta}</p>
                            </div>)

                            : <h1 className="text-center"> Esta cotización no cuenta con preguntas de funcionalidad</h1>
                        }
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-danger mx-auto">Responder</button>
                    </div>

                </div>

            </div>
        )
    }


}

export default Pm
