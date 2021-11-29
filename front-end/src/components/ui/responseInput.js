import React, { useState } from 'react'
import Input from '../ui/inputForm'
import { addFuncionalityResponse } from '../../helpers/funcionality'

const ResponseInput = ({ nombre }) => {

    const [input, setInput] = useState({ pregunta: '', valido: false })

    return (
        <div>
            <span className="align-items-center"><strong>{nombre}</strong></span>
            <div className="mt-1">
                <Input
                    name="pregunta"
                    placeholderText="Ingresa tu respuesta "
                    formData={input}
                    setFormData={setInput}
                    regExpression={4}
                    errorLabel={null}
                    typeForm="text"
                />
            </div>
            
            <div className="d-flex">
                <button className="btn btn-danger mx-auto" onClick={() => addFuncionalityResponse(input)}>Agregar comentario</button>
            </div>
        </div>
    )
}


export default ResponseInput