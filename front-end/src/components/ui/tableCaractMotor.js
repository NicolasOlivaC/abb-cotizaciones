import React from 'react'
import TableItemCaractMotor from './tableItemCaractMotor'
import { hideElement, showElement } from './../../helpers/manageStyle';
import counter from './../../hooks/counter';

const TableCaractMotor = ({ data }) => {
    console.log("Renderice TableCaractMotor")
    const { number, addOne, removeOne } = counter(0)

    return (
        <>
            <h4 className="mt-3 text-center">Motor Catalog Number: {data[number].catalog_number} </h4>
            <table className="table table-bordered bg-white">
                <thead>
                    <tr>
                        <td className="text-center align-middle">Caracteristicas</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <TableItemCaractMotor data={data[number]} label={true} />
                        </td>
                    </tr>
                </tbody>
            </table >

            <div className="text-center">
                <label >{`Viendo motor ${number + 1} de ${data.length}`}</label>
            </div>


            <div className="contenedor3 " id="flechas">
                <button
                    type="button"
                    style={(number > 0) ? showElement : hideElement}
                    className="btn btn-danger mx-2 fas fa-arrow-left"
                    onClick={removeOne} >
                </button>

                <button
                    type="button"
                    style={(number === data.length - 1) ? hideElement : showElement}
                    className={"btn btn-danger mx-2 fas fa-arrow-right"}
                    onClick={addOne} >
                </button>
                
            </div>
        </>
    )
}


export default TableCaractMotor
