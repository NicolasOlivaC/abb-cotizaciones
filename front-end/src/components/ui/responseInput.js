import React, { useState } from 'react'
import Input from '../ui/inputForm'
import { addFuncionalityResponse } from '../../helpers/funcionality'
import input from '../../hooks/input'
import { useParams } from "react-router-dom";

const ResponseInput = ({ nombre }) => {
    const { ID } = useParams();
    const { myInput, setInputValue, clearField } = input({ value: '', valido: null }, 1)

    return (
        <div >
            <span className="align-items-center"><strong>{nombre}</strong></span>
            <div className="mt-1">
                <Input
                    name="pregunta"
                    placeholderText="Ingresa tu respuesta "
                    formData={myInput}
                    setFormData={setInputValue}
                    errorLabel={null}
                    typeForm="text"
                />
            </div>

            <div className="d-flex">
                <button
                    className="btn btn-danger mx-auto"
                    onClick={() => {
                        addFuncionalityResponse(myInput.value, ID, nombre)
                        clearField()
                    }}

                >Agregar comentario</button>
            </div>
        </div>
    )
}


export default ResponseInput