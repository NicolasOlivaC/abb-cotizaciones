import React, { useState } from 'react'
import axios from "axios";

import { hideElement, showElement } from './../../helpers/manageStyle';
import counter from './../../hooks/counter';
import MotorForm1 from './motorForm1';
import MotorForm2 from './motorForm2';
import MotorForm3 from './motorForm3'

import input from '../../hooks/input'
import verifyRut from '../../hooks/rutFormatter'


import Modal from './modal'


const Form = props => {
    console.log("rendericé form")
    const local = process.env.REACT_APP_LOCAL_HOST
    const { number, addOne, removeOne } = counter(0)

    const {myInput: nombre, setInputValue: setNombre} = input({ value: '', valido: null }, 1)
    const {myInput: apellido, setInputValue: setApellido} = input({ value: '', valido: null }, 1)
    const {format, rut} = verifyRut()
    
    const {myInput: telefono, setInputValue: setTelefono} = input({ value: '', valido: null }, 2)
    const {myInput: email, setInputValue: setEmail} = input({ value: '', valido: null }, 3)
    const {myInput: empresa, setInputValue: setEmpresa} = input({ value: '', valido: null }, 1)

    const {myInput: rpm, setInputValue: setRpm} = input({ value: '', valido: null }, 2)
    const {myInput: hp, setInputValue: setHp} = input({ value: '', valido: null }, 2)
    const {myInput: peso, setInputValue: setPeso} = input({ value: '', valido: null }, 2)
    const {myInput: eficiencia, setInputValue: setEficiencia} = input({ value: '', valido: null }, 2)
    const {myInput: voltaje, setInputValue: setVoltaje} = input({ value: '', valido: null }, 2)


    const [selection, setSelection] = useState([])

    const [pregunta, setPregunta] = useState('')

    const [seguimiento, setSeguimiento] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const contactData = {
            nombre: nombre.value,
            apellido: apellido.value,
            rut: rut.rut,
            telefono: telefono.value,
            email: email.value,
            empresa: empresa.value 
        }
        axios.post(local + "/dataCotizacion", { contactData, selection, pregunta })
            .then((received) => {
                const { numeroSeg } = received.data
                setSeguimiento(numeroSeg)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const validateSteps = () => {
        if (number === 0) {
            if (nombre.valido === true && apellido.valido === true && telefono.valido === true && email.valido && empresa.valido === true && rut.valido === true) {
                addOne()
            }
            else {
                alert("Todos los campos son obligatorios")
            }
        }
        if (number === 1) {
            (selection.length >= 1 ? addOne() : alert("Debes seleccionar almenos un motor!"))
        }
    }




    const handleComponentForm = () => {
        switch (number) {
            case 0:
                return <MotorForm1
                    nombre={{ nombre, setNombre }}
                    apellido={{ apellido, setApellido }}
                    rut={{ rut, format }}
                    telefono={{ telefono, setTelefono }}
                    email={{ email, setEmail }}
                    empresa={{ empresa, setEmpresa }}
                />
            case 1:

                return <MotorForm2
                    rpm={{ rpm, setRpm }}
                    hp={{ hp, setHp }}
                    peso={{ peso, setPeso }}
                    eficiencia={{ eficiencia, setEficiencia }}
                    voltaje={{ voltaje, setVoltaje }}
                    setSelection={setSelection}
                />
            case 2:
                return <MotorForm3 pregunta={pregunta} setPregunta={setPregunta} />
            default:
                break;
        }
    }

    return (
        <div className="mt-5">

            <div className="mt-3">
                {handleComponentForm()}
            </div>


            <div className="contenedor3 my-5" id="flechas">
                <button
                    type="button"
                    style={(number > 0) ? showElement : hideElement}
                    className="btn btn-danger mx-2 fas fa-arrow-left"
                    onClick={removeOne} >
                </button>

                <button
                    type="button"
                    className={number === 2 ? "btn btn-danger mx-2 utilChange " : "btn btn-danger mx-2 fas fa-arrow-right"}
                    onClick={(number === 2) ? handleSubmit : validateSteps} >
                </button>
            </div>

            {seguimiento !== null ? <Modal seguimiento={seguimiento} /> : <h1> </h1>}

        </div>)
}

export default Form