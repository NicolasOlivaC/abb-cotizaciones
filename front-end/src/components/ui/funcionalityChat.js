import React from 'react'
import ResponseInput from './responseInput'

const FuncionalityChat = ({ data, nombre }) => {
    console.log("renderice FuncionalityChat")

    if (data.length > 0) {
        return (
            <div className="row my-2 mx-0">

                <h5> <i className="fas fa-sign"></i>  Indicaciones de funcionalidad </h5>
                <div className="divisor2 mt-2 px-3 " id="myPregunta">
                    {data.map((elemento, indice) =>
                        <div key={indice} className='spanChatTittle my-3'>
                            <span><strong>{elemento.por} - {elemento.fecha} </strong></span>
                            <p className='my-1 px-3'>{elemento.pregunta}</p>
                        </div>)
                    }

                </div>
                <div className='mx-2'>
                    < ResponseInput nombre={nombre} />
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
