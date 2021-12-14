import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import FuncionalityChat from '../../components/ui/funcionalityChat';
import CotizacionPrice from '../ui/cotizacionPrice';
import { obtainCotizationData } from '../../helpers/funcionality';
import TableCaractMotor from '../ui/tableCaractMotor';
import ContactInformation from '../ui/contactInformation';
import ButtonChangeStatus from '../ui/buttonChangeStatus';


const Pm = props => {
    console.log("renderice handlePM")

    const [data, setData] = useState(null)
    const [selection, setSelection] = useState(1)
    const { ID } = useParams();

    const handleSelection = () => {

        switch (selection) {
            case 1:
                return (
                    <FuncionalityChat data={data[2]} nombre="Eduardo Mena - PM" />
                )
            case 2:
                return (
                    <CotizacionPrice data={data[1]} desct={data[3]} />
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
                {data === null ?
                    <div className="d-flex justify-content-center mt-5" style={{ padding: "10vh" }}>
                        <div className="spinner-border text-danger my-5" style={{ width: '7rem', height: "7rem" }} role="status"></div>
                    </div>

                    :

                    <h1 className="mt-5">{data.message}</h1>}
            </>
        )
    }

    else {
        return (
            <div className="my-5 border bg-light px-3">
                <h5 className="mt-5">Solicitud de cotización - Fecha de ingreso: {data[0]?.fecha_ingreso} - Última actualización: {data[0].fecha_update}</h5>
                <h5 id="myEstado">Estado: {data[0]?.estado}</h5>
                <div className="divisor ">
                    <div className="w-50 h-auto ">
                        <ContactInformation data={data[0]} ID={ID} />
                        <ButtonChangeStatus ID={ID} />
                    </div>
                    <div className="w-50">
                        <TableCaractMotor data={data[1]} />
                    </div>
                </div>

                <hr className="mt-5" />

                <div className='border bg-white my-3'>
                    <div className=" w-50 d-flex justify-content-row gap-4 p-3 ">
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





            </div>
        )
    }


}

export default Pm
