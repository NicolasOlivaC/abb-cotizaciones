import React, { useState } from 'react'
import { applyDesct } from '../../helpers/funcionality'

const CotizacionPrice = ({ data, desct }) => {
    const [values, setValues] = useState(null)
    const [newPrice, setPrice] = useState({ price: 0, idDesct: 0 })
    const handle = (e) => {
        console.log(e.target.value)
        if (e.target.value !== "null") {
            setValues(parseInt(e.target.value))
        }
        else {
            setValues(null)
        }
    }

    const handleDcto = (e) => {
        console.log(e.target.value)
        if (values !== null) {
            setPrice({
                price: data[values].list_price - desct[parseInt(e.target.value)].descuento,
                idDesct: desct[parseInt(e.target.value)].ID_descuento
            })
        }
    }

    return (
   
            <div className='row gap-5 my-2 mx-0'>
                <div className='col-7'>
                    <h5> <i className="fas fa-cog"></i>  Parametros para el descuento </h5>
                    <div className='row d-flex flex-row'>
                        <div className='col-6'>
                            <span>Escoge el motor </span>
                            <div className="d-flex flex-row " >
                                <select className="form-control form-control" htmlFor="inlineFormCustomSelect" onChange={handle}>
                                    <option value={"null"}>Catalog Number: XXX</option>

                                    {data.map((elemento, indice) => <option key={indice} value={indice} >Catalog Number: {elemento.catalog_number}</option>)}
                                </select>
                                <i className="fas fa-arrows-alt-v adjust"></i>
                            </div>
                        </div>

                        <div className='col-6' >
                            <label >Seleccionar descuento</label>
                            <div className="d-flex flex-row ">
                                <select className="form-control form-control  " htmlFor="inlineFormCustomSelect" onChange={handleDcto}>
                                    <option value={0} >Descuento </option>
                                    {desct.map((elemento, indice) =>
                                        <option key={indice} value={indice}>
                                            {`${elemento.tipo_descuento} - ${elemento.descuento * 100}%`}
                                        </option>)}
                                </select>
                                <i className="fas fa-arrows-alt-v adjust"></i>
                            </div>
                        </div>
                    </div>

                    <h5 className='mt-3 '> <i className="far fa-eye"></i>  Previsualización del descuento  </h5>
                    <div className='row d-flex flex-row'>

                        <div className="col-6">
                            <label >Precio de lista</label>
                            <input
                                type="text"
                                className="form-control"
                                value={(values !== null) ? `$ ${data[values].list_price}` : "XXXXXXXXXXXXXXXXX"}
                                disabled={true}
                            />
                        </div>

                        <div className="col-6">
                            <label >Precio final</label>
                            <input
                                type="text"
                                className="form-control"
                                value={(values !== null) ? `$ ${newPrice.price}` : "XXXXXXXXXXXXXXXXX"}
                                disabled={true}
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-danger mt-4 text-center"
                            onClick={() => applyDesct(newPrice.price, newPrice.idDesct, data[values].id_detalle)}
                        >
                            Guardar descuento
                        </button>
                    </div>
                </div>

                <div className='col-4 text-center'>
                    <h4>Historial de cambios</h4>
                    <p>
                        lorem klasjdlkajsdlkasjklasjlkasjklasjdmklajsdlkasjdklasjd alksdjlkasjd lkasjd lkasjd lkasjdl
                        laksdjaklsjd laksdj laksjd laksdj lkasjd lkajsdlk ajsdlk ajlskd jalskdj alksdj kasjdl kasj k
                    </p>

                </div>
            </div>
    )
}

export default CotizacionPrice
