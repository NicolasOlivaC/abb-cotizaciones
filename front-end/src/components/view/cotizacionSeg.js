import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const CotizacionSeg = props => {

    const [data, setData] = useState([])
    const [choice, setChoice] = useState(0)
    const params = useParams();
    // useEffect(() => {
    //     const local = process.env.REACT_APP_LOCAL_HOST
    //     axios.get(`${local}/obtainDataCotizacion/${params.ID}`)
    //         .then((received) => {
    //               setData({ ...received.data[0], ...received.data[1], answ: received.data[2] })
    //         })
    //         .catch(error => {
    //             setData(false)
    //             console.log(error)
    //         })



    // }, [])

    const handleSelect = () => {
        switch (choice) {
            case 0:
                return (
                    <div>
                        <h4 className="mt-3 ">Indicaciones de funcionalidad</h4>
                        <div className="divisor2 mb-3 px-3 py-3 bg-white">

                            {data.answ ? data.answ.map((elemento, indice) =>
                                <div key={indice}>
                                    <span><strong>{elemento.por} - {elemento.fecha} </strong></span>
                                    <p>{elemento.pregunta}</p>
                                </div>)

                                : <h1 className="text-center"> Sin preguntas de funcionalidad </h1>
                            }
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-danger mx-auto">Nueva pregunta</button>
                        </div>
                    </div>
                )
            case 1:
                return (<h1>nothing here</h1>)

            default:
                break;
        }
    }

    if (data) {
        return (<>

            <div className="d-flex flex-column mx-auto w-50 mt-5 ">
                <label className="text-center mt-4"><strong>¿Necesitas consultar otra cotización?, proporcionanos el número!</strong></label>
                <div className="input-group mt-1">
                    <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" />
                    <div className="input-group-append mx-2">
                        <Link className="btn btn-danger" to={`/demo/`}>Buscar</Link>
                    </div>
                </div>
            </div>

            <div className="my-5 border bg-light px-3 py-3">
                <div className="d-flex justify-content-center mt-3 ">
                    <div className="d-flex flex-column text-center horizontal1" >
                        <label> <strong>Número de seguimiento</strong> </label>
                        <label> {params.ID} </label>
                    </div>

                    {/* <div className="d-flex flex-column text-center hello">
                        <label> <strong>Estado</strong> </label>
                        <label> xxxxxx </label>
                    </div> */}

                    <div className="d-flex flex-column text-center horizontal">
                        <label> <strong>Fecha de ingreso</strong> </label>
                        <label> xxxxxx </label>
                    </div>

                    <div className="d-flex flex-column text-center horizontal">
                        <label> <strong>Última actualización</strong> </label>
                        <label> xxxxxx </label>
                    </div>

                </div>


                <hr className="mt-5" />

                <div >

                    <h4>   Información general</h4>
                </div>

                <div className="divisor mt-2">

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
                                {/* <tr>
                                    <td className="w-25">Empresa</td>
                                    <td className="w-25">{data?.empresa}</td>
                                </tr> */}
                                {/* <tr>
                                    <td className="w-25">Email</td>
                                    <td className="w-25">{data?.correo}</td>
                                </tr> */}
                                {/* <tr>
                                    <td className="w-25">Telefono</td>
                                    <td className="w-25">{data?.telefono}</td>
                                </tr> */}
                            </tbody>
                        </table>

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
                <div >
                    <h4>   Antecedentes</h4>
                </div>
                <div className="mt-3 d-flex justify-content-row gap-4 ">

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={() => setChoice(0)} defaultChecked />
                        <label className="form-check-label" >Preguntas de funcionalidad</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={"Aceptado"} name="flexRadioDefault" onClick={() => setChoice(1)} />
                        <label className="form-check-label">Precios</label>
                    </div>
                </div>
                <div>
                    {handleSelect()}
                </div>
            </div>
        </>
        )
    }

    else {
        return (

            <>
                {data === null ? <h1>Loading...</h1> : <h1>No se encuentra la cotizacion: {params.ID}</h1>}
            </>

        )
    }


}

export default CotizacionSeg
