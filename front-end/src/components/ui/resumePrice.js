import React from 'react'

const ResumePrice = ({ data }) => {

    console.log(data)

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="text-center col">#</th>
                    <th className="text-center col">Catalog Number</th>
                    <th className="text-center col">Precio de lista</th>
                    <th className="text-center col">Precio con descuento</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, indice) =>

                    <tr key={indice}>
                        <th className="text-center align-middle" scope="row">{indice + 1}</th>
                        <td className="text-center align-middle">{item.catalog_number}</td>
                        <td className="text-center align-middle">{`$${item.list_price}`}</td>
                        {item.precio_final === null ?
                            <>
                                <td className="text-center align-middle">Aun no se obtiene un precio </td>
                            </>

                            :
                            <>
                                <td className="text-center align-middle">{`$${item.precio_final}`}</td>
                            </>
                        }

                    </tr>
                )}
            </tbody>
        </table>

    )
}



export default ResumePrice
