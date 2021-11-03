import React from 'react'


const TableItem = ({ indice, data }) => {

    console.log(data)
    return (
        <tr>
            <th className="text-center align-middle" scope="row">{indice}</th>
            <td className="text-center align-middle">{data.catalog_number}</td>
            <td>
                <div className="contentTable">
                    <div>
                        <li >nema_frame: {data.nema_frame}</li>
                        <li>Voltaje: {data.voltaje}</li>
                        <li>rpm: {data.rpm}</li>
                        <li>hp: {data.hp}</li>
                    </div>
                    <div>
                        <li>Disc_sym: {data.disc_sym}</li>
                        <li>C dim: {data.c_dim}</li>
                        <li>aprx wt: {data.aprx_wt}</li>
                        <li>Full load efficiency: {data.full_load_efficiency}</li>
                    </div>
                </div>

            </td>
            <td className="align-middle">
                <input className="form-check-input mx-auto contentTable " type="checkbox" value="" />
            </td>
        </tr>
    )
}



export default TableItem
