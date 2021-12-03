import React, { useState, useEffect } from 'react';
import { useParams, Link as button } from "react-router-dom";
import { obtainCotizationData } from '../../helpers/funcionality';
import ContactInformation from '../ui/contactInformation';
import FuncionalityChat from '../ui/funcionalityChat';
import TableCaractMotor from '../ui/tableCaractMotor';

const CotizacionSeg = props => {

    const [data, setData] = useState(null)
    const [choice, setChoice] = useState(0)
    const { ID } = useParams();

    useEffect(() => {
        obtainCotizationData(setData, ID)
    }, [])

    const [myinput, setInput] = useState('');
    console.log(myinput)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSelect = () => {
        switch (choice) {
            case 0:
                return (
                    <FuncionalityChat data={data[2]} nombre={data[0].nombre} />
                )
            case 1:
                return (<h1>nothing here</h1>)

            default:
                break;
        }
    }
    console.log(data)

    if (data !== null && data !== "error") {
        return (<>

            <div className="d-flex flex-column mx-auto w-50 mt-5 ">
                <label className="text-center mt-4"><strong>¿Necesitas consultar otra cotización?, proporcionanos el número!</strong></label>
                <div className="input-group mt-1">
                    <input type="text" className="form-control" value={myinput} onChange={handleChange} placeholder="XXXX-XXXX-XXXX-XXXX" />
                    <div className="input-group-append mx-2">
                        <button className="btn btn-danger" onClick={() => obtainCotizationData(setData, myinput)}>Buscar</button>
                    </div>
                </div>
            </div>

            <div className="my-5 border bg-light px-3 py-3">
                <div className="d-flex justify-content-center mt-3 ">
                    <div className="d-flex flex-column text-center horizontal1" >
                        <label> <strong>Número de seguimiento</strong> </label>
                        <label> {data[0].id_cotizacion} </label>
                    </div>

                    {/* <div className="d-flex flex-column text-center hello">
                        <label> <strong>Estado</strong> </label>
                        <label> xxxxxx </label>
                    </div> */}

                    <div className="d-flex flex-column text-center horizontal">
                        <label> <strong>Fecha de ingreso</strong> </label>
                        <label> {data[0].fecha_ingreso} </label>
                    </div>

                    <div className="d-flex flex-column text-center horizontal">
                        <label> <strong>Última actualización</strong> </label>
                        <label> {data[0].fecha_update} </label>
                    </div>

                </div>


                <hr className="mt-5" />

                <div >

                    <h4>   Información general</h4>
                </div>

                <div className="divisor mt-2">

                    <div className="w-50 h-auto ">
                        <ContactInformation data={data[0]} />
                    </div>

                    <div className="w-50">
                        <TableCaractMotor data={data[1]} />
                    </div>
                </div>


                <hr className="mt-5" />

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
            <div className="mt-1 text-center">

                <div className="d-flex flex-column mx-auto w-50 mt-5 ">
                    <label className="text-center mt-4"><strong>¿Necesitas consultar otra cotización?, proporcionanos el número!</strong></label>
                    <div className="input-group mt-1">
                        <input type="text" className="form-control" value={myinput} onChange={handleChange} placeholder="XXXX-XXXX-XXXX-XXXX" />
                        <div className="input-group-append mx-2">
                            <button className="btn btn-danger" onClick={() => obtainCotizationData(setData, myinput)}>Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    {data === null ? <h1>Loading...</h1> : <h1>No se encuentra la cotizacion asociada</h1>}
                </div>
            </div>

        )
    }


}

export default CotizacionSeg
