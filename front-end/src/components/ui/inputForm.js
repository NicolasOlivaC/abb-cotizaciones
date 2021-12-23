import React from 'react'

const InputForm = React.memo(({ inputTittle, name, placeholderText, formData, setFormData, errorLabel, typeForm }) => {
    console.log("rendericé input form" + name)

    return (
        <>
            <div className="form-group">
                {inputTittle ? <label className="mx-auto">{inputTittle}</label> : null}

                <input
                    className="form-control mx-auto outlineColor"
                    id="input"
                    type={typeForm}
                    name={name}
                    placeholder={placeholderText}
                    value={formData.value}
                    onChange={setFormData}
                    autoComplete="off"
                />
                {formData.valido === null || formData.valido === true ?

                    <label className="text-danger mx-2" id="errorName"></label>
                    :
                    <label className="text-danger mx-2" id="errorName">
                        {(formData.value.length === 0 ? "El campo no puede estar vacio" : errorLabel)}
                    </label>

                }

            </div>
        </>
    )
})

export default InputForm