import React from 'react'
const inputRegex = [
    "seba",
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    /^[0-9]+$/,
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[.]+[a-zA-Z0-9._-]+$/,
    /[a-zA-Z0-9À-ÿ\u00f1\u00d1.-]+$/,
    /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
]

const InputForm = React.memo(({ inputTittle, name, placeholderText, formData, setFormData, regExpression, errorLabel, typeForm }) => {
    console.log("rendericé input form" + name)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handle = (e) => {
        const values = Object.values(formData)
        if (!inputRegex[regExpression].test(values[0]) && values[0].length > 0) {
            console.log(Object.values(formData)[0])
            setFormData({ ...formData, valido: false })
        }
        else {
            if(Object.values(formData)[0] === ''){
                setFormData({ [e.target.name]: '', valido: false })
            }
            else{
                setFormData({ ...formData, valido: true })
            }
            
        }
    }

    return (
        <>
            <div className="form-group">
                <label className="mx-auto">{inputTittle}</label>
                <input
                    className="form-control mx-auto"
                    id="input"
                    type={typeForm}
                    name={name}
                    placeholder={placeholderText}
                    value={Object.values(formData)[0]}
                    onChange={handleChange}
                    onKeyUp={handle}
                    
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

export default InputForm