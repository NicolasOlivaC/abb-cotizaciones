import React, { useState } from 'react'
import TableItemCaractMotor from './tableItemCaractMotor'

const TableItem = React.memo(({ indice, data, setSelection }) => {
    console.log("renderice tableItem")

    const [stateButton, setStateButton] = useState(false)

    const handleState = (e) => {

        if (stateButton === true) {
            setSelection(anterior =>
                anterior.filter(item => item !== data.catalog_number)
            )
            setStateButton(!stateButton);
        }
        else {
            setSelection(anterior => [...anterior, data.catalog_number])
            setStateButton(!stateButton);
        }

    }

    return (
        <tr>
            <th className="text-center align-middle" scope="row">{indice}</th>
            <td className="text-center align-middle">{data.catalog_number}</td>
            <td>
                <TableItemCaractMotor data = {data} />
            </td>
            <td className="align-middle">
                <input className="form-check-input mx-auto contentTable " type="checkbox" value={stateButton} onClick={handleState} />
            </td>
        </tr>
    )
})



export default TableItem
