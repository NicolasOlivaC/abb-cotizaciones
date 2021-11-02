import React from 'react'
import TableItem from './tableItem'

const Table = props => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Catalog Number</th>
                    <th scope="col">Caracteristicas</th>
                    <th scope="col">Seleccionar</th>
                </tr>
            </thead>
            <tbody>
                <TableItem />
            </tbody>
        </table>
    )
}



export default Table
