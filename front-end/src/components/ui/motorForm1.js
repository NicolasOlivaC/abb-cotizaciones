import React from 'react'
import image from '../../image/place.jpg'
import Input from './inputForm'
import InputRut from './inputRut'

const MotorForm1 = React.memo(({ nombre, apellido, rut, telefono, email, empresa }) => {
    
    console.log("rendericé motorForm1")
    return (
        <div className="formContainer1 mt-1 border  py-3 px-3 bg-light ">
            <h5>Ingresar información de contacto.</h5>

            <div className="formContainer1_1 mt-3">
                <div className="formContainer1_1_1">
                    <img className="imgff" src={image} alt="place" />
                </div>

                <form className="formContainer1_1_2">
                    <Input
                        inputTittle="Nombre"
                        name="nombre"
                        placeholderText="John"
                        formData={nombre.nombre}
                        setFormData={nombre.setNombre}
                        errorLabel="El nombre no debe contener espacios vacios y caracteres especiales"
                        typeForm="text"
                    />
                    <Input
                        inputTittle="Apellido"
                        name="apellido"
                        placeholderText="Doe"
                        formData={apellido.apellido}
                        setFormData={apellido.setApellido}
                        errorLabel={"El apellido no debe contener espacios vacios y caracteres especiales"}
                        typeForm="text"
                    />
                    <InputRut
                        inputTittle="Rut"
                        name="rut"
                        placeholderText="12345678-9"
                        formData={rut.rut}
                        setFormData={rut.format}
                        errorLabel="El rut ingresado no es valido"
                        typeForm="text"
                    />

                    <Input
                        inputTittle="Telefono"
                        name="telefono"
                        placeholderText="999999999"
                        formData={telefono.telefono}
                        setFormData={telefono.setTelefono}
                        errorLabel={"El numero de telefono no puede contener letras."}
                        typeForm="number"
                    />
                    <Input
                        inputTittle="Correo electronico"
                        name="email"
                        placeholderText="jhonnDoe@mail.com"
                        formData={email.email}
                        setFormData={email.setEmail}
                        errorLabel={"Ingresa un correo electronico valido"}
                        typeForm="email"
                    />
                    <Input
                        inputTittle="Empresa"
                        name="empresa"
                        placeholderText="Jhonn Doe Inc"
                        formData={empresa.empresa}
                        setFormData={empresa.setEmpresa}
                        errorLabel={"El nombre de empresa no debe contener espacios vacios y caracteres especiales"}
                        typeForm="text"
                    />
                </form>
            </div>
        </div>
    )
})

export default MotorForm1