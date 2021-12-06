import React from 'react'

const InputRut = React.memo(({ inputTittle, name, placeholderText, formData, setFormData, errorLabel, typeForm }) => {
    
    console.log("rendericé inputRut Form")

    return (
        <>
            <div className="form-group">
                { inputTittle ? <label className="mx-auto">{inputTittle}</label> : null}

                <input
                    className="form-control mx-auto"
                    id="input"
                    type={typeForm}
                    name={name}
                    placeholder={placeholderText}
                    value={formData.formattedRut}
                    onChange={setFormData}
                    // onKeyUp={handle}
                    
                    // onBlur={handle}
                    autoComplete="off"
                />
                {formData.valido === null || formData.valido === true ?

                    <label className="text-danger mx-2" id="errorName"></label>
                    :
                    <label className="text-danger mx-2" id="errorName">{errorLabel}</label>

                }

            </div>
        </>
    )
})

export default InputRut