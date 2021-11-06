import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

const TablePrelCot = props => {


    const [data, setData] = useState(null)
    const [option, setOption] = useState("Nuevo")

    const handleClick = (e) => {
        setOption(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        const local = process.env.REACT_APP_LOCAL_HOST
        axios.get(local + "/prelCot", { params: { option: option } })
            .then((received) => {
                setData(received.data)
            })

        return () => {
        }
    }, [option])





    return (
        <div className="my-5 px-3 py-3 border bg-light">
            <h1>Cotizaciones</h1>

            <div className="mt-3 d-flex justify-content-row gap-4 ">
                <div className="form-check">
                    <input className="form-check-input" type="radio" value={"Nuevo"} name="flexRadioDefault" onClick={handleClick} defaultChecked />
                    <label className="form-check-label" >Nuevas</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value={"Aceptado"} name="flexRadioDefault" onClick={handleClick} />
                    <label className="form-check-label">Aceptadas</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value={"Rechazado"} name="flexRadioDefault" onClick={handleClick} />
                    <label className="form-check-label">Rechazadas</label>
                </div>
            </div>


            {data !== null ?
                <>
                    <h5 className="mt-5">Cotizaciones encontradas: {data.length}</h5>

                    <table className="table table-bordered mt-1 bg-white">
                        <thead>
                            <tr className="text-center">
                                <th className="col-1 text-center">#</th>
                                <th className="col-2 text-center">Codigo de seguimiento</th>
                                <th className="col-3">Nombre</th>
                                <th className="col-3">Fecha de ingreso</th>
                                <th className="col-3">Ultima actualización</th>
                                <th className="col-1 text-center">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((elemento, indice) =>
                                <tr className="text-center" key={indice + 1}>
                                    <td className="text-center">{indice + 1}</td>
                                    <td className="text-center">{elemento.id_cotizacion}</td>
                                    <td className="text-center">{elemento.nombre} {elemento.apellido}</td>
                                    <td className="text-center">{elemento.fecha_ingreso}</td>
                                    <td className="text-center">{elemento.fecha_update}</td>
                                    <td><Link className="fas fa-plus-square" to={`/handlePM/${elemento.id_cotizacion}`}></Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </>
                :
                <h1> </h1>
            }
        </div>
    )

    // else {
    //     return (<h1>Loading...</h1>)
    // }

}



export default TablePrelCot
