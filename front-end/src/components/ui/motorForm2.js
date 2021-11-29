import React, { useState } from 'react'
import axios from "axios";
import Input from './inputForm'
import MiTable from './table'
const MotorForm2 = ({ rpm, hp, peso, eficiencia, voltaje, setSelection }) => {

    console.log("rendericé motorForm2")
    const dummy = null
    const local = process.env.REACT_APP_LOCAL_HOST
    const [data, setData] = useState([])

    const getInfoMotor = (e) => {

        e.preventDefault()
        let camposValidos = 0;
        let motorData = {  }
        const data = [rpm.rpm, hp.hp, peso.peso, eficiencia.eficiencia, voltaje.voltaje]

        for (var i = 0; i < 5; i++) {
            if (data[i].valido === true) {
                motorData = {...motorData, ...data[i]}
                camposValidos += 1
            }
        }

        delete motorData.valido;

        if (camposValidos >= 2) {
            axios.post(local + "/dataMotor", motorData)
                .then((received) => {
                    const message = received.data
                    console.log(message)
                    setData(message)
                })
        }
        else{
            alert("Debes completar almenos 2 elementos del formulario.")
        }


    }

    return (
        <div className="formContainer2 mt-1 border py-3 px-3 bg-light ">
            <h5 className="">Ingresar especificación de motor</h5>

            <div className="border border-body  mt-2 py-3" id="inputId">

                <form className="formContainer2_1 mx-2">
                    <Input
                        inputTittle="Revoluciones por minuto"
                        name="rpm"
                        placeholderText="xx"
                        formData={rpm.rpm}
                        setFormData={rpm.setRpm}
                        regExpression={2}
                        errorLabel={dummy}
                        typeForm="number"
                    />

                    <Input
                        inputTittle="Caballos de fuerza"
                        name="hp"
                        placeholderText="xx"
                        formData={hp.hp}
                        setFormData={hp.setHp}
                        regExpression={2}
                        errorLabel={dummy}
                        typeForm="number"
                    />

                    <Input
                        inputTittle="Peso aproximado"
                        name="full_load_efficiency"
                        placeholderText="xx"
                        formData={peso.peso}
                        setFormData={peso.setPeso}
                        regExpression={2}
                        errorLabel={dummy}
                        typeForm="number"
                    />

                    <Input
                        inputTittle="Eficiencia de carga maxima"
                        name="aprx_wt"
                        placeholderText="xx"
                        formData={eficiencia.eficiencia}
                        setFormData={eficiencia.setEficiencia}
                        regExpression={2}
                        errorLabel={dummy}
                        typeForm="number"
                    />

                    <Input
                        inputTittle="Voltaje"
                        name="voltage"
                        placeholderText="xx"
                        formData={voltaje.voltaje}
                        setFormData={voltaje.setVoltaje}
                        regExpression={2}
                        errorLabel={dummy}
                        typeForm="number"
                    />
                </form>

                <div className="formContainer2_2">
                    <button className="btn btn-danger center" onClick={getInfoMotor}>Obtener coincidencias</button>
                </div>

            </div>

            <div className="formContainer2_3 mx-5">
                {data.length > 0 ? <MiTable data={data} setSelection={setSelection} /> : <h1> </h1>}
            </div>

        </div>

    )
}

// motorForm1.propTypes = {

// }

export default MotorForm2
