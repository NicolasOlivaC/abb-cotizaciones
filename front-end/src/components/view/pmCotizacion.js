import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import FuncionalityChat from '../../components/ui/funcionalityChat';
import CotizacionPrice from '../ui/cotizacionPrice';
import { changeCotizationStatus, obtainCotizationData } from '../../helpers/funcionality';


const Pm = props => {
    console.log("renderice handlePM")

    const [data, setData] = useState(null)
    const [selection, setSelection] = useState(1)
    const params = useParams();


    const handleSelection = () => {

        switch (selection) {
            case 1:

                return (
                    <FuncionalityChat data={data[2]} />
                )
            case 2:
                return (
                    <CotizacionPrice data={data[1]} />
                )
            default:
                break;
        }
    }

    useEffect(() => {
        obtainCotizationData(setData, params.ID)
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
            <div className="my-5 border bg-light px-3">
                <h5 className="mt-5">Solicitud de cotización - Fecha de ingreso: {data[0]?.fecha_ingreso} - Última actualización: {data[0]?.fecha_update}</h5>
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
                            <button className="btn btn-success mx-3" onClick={() => changeCotizationStatus("aceptar")}>Aceptar</button>
                            <button className="btn btn-danger mx-3" onClick={() => changeCotizationStatus("rechazar")}>Rechazar</button>
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
                                        {data[1].map((item, indice) =>
                                            <div key={indice} className="contentTable">
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



                <div className=" mt-3 border w-50 bg-white py-2 px-2 d-flex justify-content-row gap-4 ">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" onClick={() => setSelection(1)} name="flexRadioDefault" defaultChecked />
                        <label className="form-check-label" >Indicaciones de funcionalidad</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" onClick={() => setSelection(2)} name="flexRadioDefault" />
                        <label className="form-check-label">Asignar descuentos a la cotización</label>
                    </div>
                </div>

                {handleSelection()}


            </div>
        )
    }


}

export default Pm
