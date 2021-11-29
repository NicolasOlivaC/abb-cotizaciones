import React, { useState } from 'react'


const CotizacionPrice = ({ data }) => {
    console.log(data)

    const [values, setValues] = useState(null)
    const [newPrice, setPrice] = useState(null)

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
            setPrice(data[values].list_price * (parseInt(e.target.value)+1))
        }
    }

    const arrayFake = ["descto1", "descto2", "descto3", "descto4", "descto5", "descto6"];


    return (
        <div className="my-3 container-md">
            <div>
                <h4>Escoge el motor </h4>
                <div className="d-flex flex-row ">
                    <select className="form-control form-control w-25" htmlFor="inlineFormCustomSelect" onChange={handle}>
                        <option value={"null"}>Escoge uno de los motores...</option>
                        {data.map((elemento, indice) => <option key={indice} value={indice} >Catalog Number: {elemento.catalog_number}</option>)}
                    </select>
                    <i className="fas fa-arrows-alt-v adjust"></i>
                </div>


            </div>

            <div>
                <div className="form-row mt-4 d-flex flex-row gap-3">
                    <div className="form-group col-2">
                        <label >Precio de lista</label>
                        <input
                            type="text"
                            className="form-control"
                            value={(values !== null) ? `$ ${data[values].list_price}` : "XXXXXXXXXXXXXXXXXX"}
                            disabled={true}

                        />
                    </div>
                    {/* <i className="fas fa-arrows-v"></i> */}
                    <div className="form-group col-2">
                        <label >Seleccionar descuento</label>
                        <div className="d-flex flex-row ">
                            <select className="form-control form-control  " htmlFor="inlineFormCustomSelect" onChange={handleDcto}>
                                <option value={0} >Descuento... </option>
                                {arrayFake.map((elemento, indice) => <option key={indice} value={indice} >{elemento}</option>)}
                            </select>
                            <i className="fas fa-arrows-alt-v adjust"></i>
                        </div>
                    </div>


                    <div className="form-group col-2">
                        <label >Precio final</label>
                        <input
                            type="text"
                            className="form-control"
                            value={(values !== null) ? `$ ${newPrice}` : "XXXXXXXXXXXXXXXXXX"}
                            disabled={true}
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-danger mt-4 text-center">Guardar descuento</button>
                </div>
            </div>
        </div>
    )
}

export default CotizacionPrice
