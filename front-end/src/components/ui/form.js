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

    const [show, setShow] = useState(false)

    const [nombre, setNombre] = useState({ nombre: '', valido: null })
    const [apellido, setApellido] = useState({ apellido: '', valido: null })
    const [rut, setRut] = useState({ rut: '', valido: null })
    const [telefono, setTelefono] = useState({ telefono: '', valido: null })
    const [email, setEmail] = useState({ email: '', valido: null })
    const [empresa, setEmpresa] = useState({ empresa: '', valido: null })

    const [rpm, setRpm] = useState({ rpm: '', valido: null })
    const [hp, setHp] = useState({ hp: '', valido: null })
    const [peso, setPeso] = useState({ peso: '', valido: null })
    const [eficiencia, setEficiencia] = useState({ eficiencia: '', valido: null })
    const [voltaje, setVoltaje] = useState({ voltaje: '', valido: null })

    const [pregunta, setPregunta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const contactData = { ...nombre, ...apellido, ...rut, ...telefono, ...email, ...empresa }

        axios.post(local + "/dataCotizacion", { contactData, pregunta })
            .then((received) => {
                const { message } = received.data
                console.log(message)
                setShow(true)
            })
        setShow(true)
    }

    const validateSteps = () => {
        if (number === 0) {
            if (nombre.valido === true && apellido.valido === true && telefono.valido === true && email.valido && empresa.valido === true && rut.valido === true) {
                addOne()
            }
            else {
                alert("rellena los campos solicitados")
            }
        }
        if (number === 1) {
            if (rpm.valido === true && hp.valido === true && peso.valido === true && eficiencia.valido === true && voltaje.valido === true) {
                addOne()
            }
            else {
                alert("rellena los campos solicitados")
            }
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



            { show === true ? <Modal setShow={setShow}/> : <h1> </h1>}


        </div>)
}

export default Form