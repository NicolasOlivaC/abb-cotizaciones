import React from 'react'
import ResponseInput from './responseInput'

const FuncionalityChat = ({ data }) => {

    console.log(data)

    if (data.length > 0) {
        return (
            <div className="mt-3">
                <h4 className="mt-3 ">Indicaciones de funcionalidad</h4>
                <div className="divisor2 mb-3 px-3 pt-3 bg-white">
                    {data.map((elemento, indice) =>
                        <div key={indice}>
                            <span><strong>{elemento.por} - {elemento.fecha} </strong></span>
                            <p>{elemento.pregunta}</p>
                        </div>)
                    }
                    < ResponseInput nombre={"Eduardo Mena - PM"} />
                </div>
            </div>
        )
    }
    else {
        return (
            <h1 className="text-center my-4"> Esta cotización no cuenta con preguntas de funcionalidad</h1>
        )
    }
}


export default FuncionalityChat
