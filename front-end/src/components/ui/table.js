import React from 'react'
import TableItem from './tableItem'

const Table = ({data, setSelection}) => {

    console.log("renderice mi tabla")

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="text-center col-1">#</th>
                    <th className="text-center col-3">Catalog Number</th>
                    <th className="text-center col">Caracteristicas</th>
                    <th className="text-center col-1"> * </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => <TableItem key={index} indice={index+1} data={item} setSelection = {setSelection}/> )}
            </tbody>
        </table>
    )
}



export default Table
