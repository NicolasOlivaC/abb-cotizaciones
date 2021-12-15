import React, { useState, useRef } from 'react'
import { applyDesct } from '../../helpers/funcionality'

const CotizacionPrice = ({ data, desct }) => {
    const [values, setValues] = useState(0)
    const [newPrice, setPrice] = useState({ price: data[values].list_price, idDesct: 0})
    const myRef = useRef()
    const handle = (e) => {
        setValues(parseInt(e.target.value))
        setPrice({
            price:data[parseInt(e.target.value)].list_price,
            idDesct: 0
        })
        myRef.current.value = 0
    }

    const handleDcto = (e) => {       
        if (values !== null) {
            setPrice({
                price: (e.target.value === 0 ? data[values].list_price : data[values].list_price - data[values].list_price * desct[parseInt(e.target.value)].descuento),
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
                                {data.map((elemento, indice) => <option key={indice} value={indice} >Catalog Number: {elemento.catalog_number}</option>)}
                            </select>
                            <i className="fas fa-arrows-alt-v adjust"></i>
                        </div>
                    </div>

                    <div className='col-6' >
                        <label >Seleccionar descuento</label>
                        <div className="d-flex flex-row ">
                            <select className="form-control form-control" ref={myRef} htmlFor="inlineFormCustomSelect" onChange={handleDcto}>
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
                        onClick={() => applyDesct(newPrice.price, newPrice.idDesct, data[values].id_detalle, data[values].id_cotizacion)}
                    >
                        Guardar descuento
                    </button>
                </div>
            </div>

            <div className='col-4 d-flex flex-column justify-content-center text-center '>
                <h5>Ultima modificación realizada a  {data[values].catalog_number}</h5>
                <span><strong>Fecha:</strong> {data[values]?.fecha_update ? data[values].fecha_update : <span> Sin registro</span>} </span>

                <span><strong>Descuento:</strong>{data[values]?.tipo_descuento ? <span> {data[values].tipo_descuento} </span> : <span> No asignado</span>}</span>

                <span><strong>Precio final:</strong> {data[values]?.precio_final ? <span> $ {data[values].precio_final} </span> : <span> No asignado</span>} </span>

                <div className='liness'></div>

            </div>

        </div>
    )
}

export default CotizacionPrice
