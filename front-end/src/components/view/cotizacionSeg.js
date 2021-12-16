import React, { useState, useEffect } from 'react';
import { useParams, Link as button } from "react-router-dom";
import { obtainCotizationData2 } from '../../helpers/funcionality';
import ContactInformation from '../ui/contactInformation';
import FuncionalityChat from '../ui/funcionalityChat';
import TableCaractMotor from '../ui/tableCaractMotor';
import ResumePrice from '../ui/resumePrice';

const CotizacionSeg = props => {

    const [data, setData] = useState(null)
    const [choice, setChoice] = useState(1)
    const { ID } = useParams();
    console.log(data)
    useEffect(() => {
        obtainCotizationData2(setData, ID)
    }, [])

    const [myinput, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSelect = () => {
        switch (choice) {
            case 1:
                return (
                    <FuncionalityChat data={data[2]} nombre={data[0].nombre} />
                )
            case 2:
                return (
                    <ResumePrice data={data[3]} />
                )

            default:
                break;
        }
    }

    if (data !== null && data !== "error") {
        return (<>

            <div className="d-flex flex-column mx-auto w-50 mt-5 ">
                <label className="text-center mt-4"><strong>¿Necesitas consultar otra cotización?, proporcionanos el número!</strong></label>
                <div className="input-group mt-1">
                    <input type="text" className="form-control" value={myinput} onChange={handleChange} placeholder="XXXX-XXXX-XXXX-XXXX" />
                    <div className="input-group-append mx-2">
                        <button className="btn btn-danger" onClick={() => obtainCotizationData2(setData, myinput)}>Buscar</button>
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


                <hr className="my-4" />

                <div >
                    <h4>   Información general</h4>
                </div>

                <div className="divisor ">

                    <div className="w-50 h-auto ">
                        <ContactInformation data={data[0]} />
                    </div>

                    <div className="w-50">
                        <TableCaractMotor data={data[1]} />
                    </div>
                </div>


                <hr className="my-4" />

                <div className='border bg-white '>
                    <div className=" w-50 d-flex justify-content-row gap-4 p-3 ">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onClick={() => setChoice(1)} name="flexRadioDefault" defaultChecked />
                            <label className="form-check-label" >Indicaciones de funcionalidad</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onClick={() => setChoice(2)} name="flexRadioDefault" />
                            <label className="form-check-label">Ver precios</label>
                        </div>
                    </div>

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
                            <button className="btn btn-danger" onClick={() => obtainCotizationData2(setData, myinput)}>Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    {data === null ?

                        <div className="d-flex justify-content-center mt-5" style={{ padding: "10vh" }}>
                            <div className="spinner-border text-danger my-5" style={{ width: '7rem', height: "7rem" }} role="status"></div>
                        </div>
                        :

                        <h1>No se encuentra la cotizacion asociada</h1>}
                </div>
            </div>

        )
    }


}

export default CotizacionSeg
