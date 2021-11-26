import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const Pm = props => {

    const [data, setData] = useState(null)
    const params = useParams();
    console.log(data?.message)
    console.log(data)
    useEffect(() => {
        const local = process.env.REACT_APP_LOCAL_HOST
        axios.get(`${local}/obtainDataCotizacion/${params.ID}`)
            .then((received) => {
                setTimeout(() => {
                    setData({ ...received.data[0], ...received.data[1], answ: received.data[2] })
                }, 1000);
            })
            .catch(error => {
                setData({message: error.response.data.error})
            })
    }, [])

    

    if(data === null || data?.message) {
        return (

            <>
                {data === null ? <h1 className="mt-5">Loading...</h1> : <h1 className="mt-5">{data.message}</h1>}
            </> 

        )
    }

    else{
        return (
            <div className="my-5 border bg-light px-3 py-3">
                <h5>Solicitud de cotización - Fecha de ingreso: {data?.fecha_ingreso} - Última actualización: {data?.fecha_update}</h5>
                <h5>Estado: {data?.estado}</h5>

                <div className="divisor ">
                    <div className="w-50 h-auto ">
                        <h4 className="mt-3 text-center">Datos personales</h4>
                        <table className="table table-bordered bg-white">
                            <tbody>
                                <tr>
                                    <td className="w-25">Nombre</td>
                                    <td className="w-25">{data?.nombre}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Apellido</td>
                                    <td className="w-25">{data?.apellido}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Empresa</td>
                                    <td className="w-25">{data?.empresa}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Email</td>
                                    <td className="w-25">{data?.correo}</td>
                                </tr>
                                <tr>
                                    <td className="w-25">Telefono</td>
                                    <td className="w-25">{data?.telefono}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-5 d-flex justify-content-center">
                            <button className="btn btn-success mx-3">Aceptar</button>
                            <button className="btn btn-danger mx-3">Rechazar</button>
                        </div>
                    </div>

                    <div className="w-50">
                        <h4 className="mt-3 text-center">Motor Catalog Number: {data?.catalog_number} </h4>
                        <table className="table table-bordered bg-white">
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
                                                <li >nema_frame: {data?.nema_frame} </li>
                                                <li>Voltaje: {data?.voltag}</li>
                                                <li>rpm: {data?.rpm}</li>
                                                <li>hp: {data?.hp}</li>
                                            </div>
                                            <div>
                                                <li>Disc_sym: {data?.Dysc_sym}</li>
                                                <li>C dim: {data?.c_dim}</li>
                                                <li>aprx wt: {data?.aprx_wt}</li>
                                                <li>Full load efficiency: {data?.full_load_efficiency}</li>
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
