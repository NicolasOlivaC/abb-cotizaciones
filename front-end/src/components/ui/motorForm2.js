// import PropTypes from 'prop-types'

import Input from './inputForm'
import MiTable from './table'
const motorForm2 = ({rpm, hp, peso, eficiencia, voltaje}) => {

    console.log("rendericé motorForm2")
    const dummy = "asd"

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

export default motorForm2
