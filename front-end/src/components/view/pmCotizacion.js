import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import FuncionalityChat from '../../components/ui/funcionalityChat';
import CotizacionPrice from '../ui/cotizacionPrice';
import { obtainCotizationData } from '../../helpers/funcionality';
import TableCaractMotor from '../ui/tableCaractMotor';
import ContactInformation from '../ui/contactInformation';


const Pm = props => {
    console.log("renderice handlePM")

    const [data, setData] = useState(null)
    const [selection, setSelection] = useState(1)
    const { ID } = useParams();

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
        obtainCotizationData(setData, ID)
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
                <h5 id="myEstado">Estado: {data[0]?.estado}</h5>
                <div className="divisor ">
                    <div className="w-50 h-auto ">
                        <ContactInformation data={data[0]} ID={ID} />
                    </div>
                    <div className="w-50">
                        <TableCaractMotor data={data[1]} />
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
