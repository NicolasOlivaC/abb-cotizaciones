import React, { useState } from 'react'
import axios from "axios";

import { hideElement, showElement } from './../../helpers/manageStyle';
import counter from './../../hooks/counter';
import MotorForm1 from './motorForm1';
import MotorForm2 from './motorForm2';
import MotorForm3 from './motorForm3'

import Modal from './modal'

const Form = props => {
    console.log("rendericé form")
    const local = process.env.REACT_APP_LOCAL_HOST
    const { number, addOne, removeOne } = counter(0)

    const [nombre, setNombre] = useState({ nombre: '', valido: null })
    const [apellido, setApellido] = useState({ apellido: '', valido: null })
    const [rut, setRut] = useState({ rut: '', valido: null })
    const [telefono, setTelefono] = useState({ telefono: '', valido: null })
    const [email, setEmail] = useState({ email: '', valido: null })
    const [empresa, setEmpresa] = useState({ empresa: '', valido: null })

    const [rpm, setRpm] = useState({ rpm: '', valido: null })
    const [hp, setHp] = useState({ hp: '', valido: null })
    const [peso, setPeso] = useState({ aprx_wt: '', valido: null })
    const [eficiencia, setEficiencia] = useState({ full_load_efficiency: '', valido: null })
    const [voltaje, setVoltaje] = useState({ voltage: '', valido: null })

    const [selection, setSelection] = useState([])

    const [pregunta, setPregunta] = useState('')

    const [seguimiento, setSeguimiento] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const contactData = { ...nombre, ...apellido, ...rut, ...telefono, ...email, ...empresa }
        delete contactData.valido;
 
        axios.post(local + "/dataCotizacion", { contactData, selection, pregunta })
            .then((received) => {
                const { numeroSeg } = received.data
                setSeguimiento(numeroSeg)
            })
            .catch((error) =>{
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
                    rut={{ rut, setRut }}
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
                    setSelection = {setSelection}
                />
            case 2:
                return <MotorForm3 pregunta={pregunta} setPregunta={setPregunta} />
            default:
                break;
        }
    }

    return (
        <div className="mt-5">

            {handleComponentForm()}

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

            { seguimiento !== null ? <Modal seguimiento = {seguimiento}/> : <h1> </h1>}

        </div>)
}

export default Form