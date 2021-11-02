import React from 'react'
import axios from "axios";
import Input from './inputForm'
import MiTable from './table'
const MotorForm2 = ({ rpm, hp, peso, eficiencia, voltaje }) => {

    console.log("rendericé motorForm2")
    const dummy = "asd"
    const local = process.env.REACT_APP_LOCAL_HOST
    const getInfoMotor = (e) => {
        e.preventDefault()
        let motorData = { ...rpm.rpm, ...hp.hp, ...peso.peso, ...eficiencia.eficiencia, ...voltaje.voltaje }
        delete motorData.valido;
        axios.post(local + "/dataMotor", motorData)
            .then((received) => {
                const message = received.data
                console.log(message)
            })
    }

    return (
        <div className="formContainer2 mt-1 border py-3 px-3 bg-light ">
            <h5>Ingresar especificación de motor</h5>
            <div className="formContainer2_1">
                <form className="formContainer2_1_1 mx-2">
                    <Input
                        inputTittle="Revoluciones por minuto"
                        name="rpm"
                        placeholderText="xx"
                        formData={rpm.rpm}
                        setFormData={rpm.setRpm}
                        regExpression={1}
                        errorLabel={dummy}
                        typeForm="text"
                    />

                    <Input
                        inputTittle="Caballos de fuerza"
                        name="hp"
                        placeholderText="xx"
                        formData={hp.hp}
                        setFormData={hp.setHp}
                        regExpression={1}
                        errorLabel={dummy}
                        typeForm="text"
                    />

                    <Input
                        inputTittle="Peso aproximado"
                        name="peso"
                        placeholderText="xx"
                        formData={peso.peso}
                        setFormData={peso.setPeso}
                        regExpression={1}
                        errorLabel={dummy}
                        typeForm="text"
                    />

                    <Input
                        inputTittle="Eficiencia de carga maxima"
                        name="eficiencia"
                        placeholderText="xx"
                        formData={eficiencia.eficiencia}
                        setFormData={eficiencia.setEficiencia}
                        regExpression={1}
                        errorLabel={dummy}
                        typeForm="text"
                    />

                    <Input
                        inputTittle="Voltaje"
                        name="voltaje"
                        placeholderText="xx"
                        formData={voltaje.voltaje}
                        setFormData={voltaje.setVoltaje}
                        regExpression={1}
                        errorLabel={dummy}
                        typeForm="text"
                    />
                    <div className="formContainer2_1_1_1">
                        <button className="btn btn-primary center" onClick={getInfoMotor}>Obtener coincidencias</button>
                    </div>
                </form>
                <div className="formContainer2_1_2 mx-5">
                    <MiTable />
                </div>
            </div>

        </div>

    )
}

// motorForm1.propTypes = {

// }

export default MotorForm2
