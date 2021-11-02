import React from 'react'
const inputRegex = [
    "seba",
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    /^[0-9]+$/,
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[.]+[a-zA-Z0-9._-]+$/,
    /[a-zA-Z0-9À-ÿ\u00f1\u00d1.-]+$/
]

const InputForm = React.memo(({ inputTittle, name, placeholderText, formData, setFormData, regExpression, errorLabel, typeForm, valido }) => {
    console.log("rendericé input form" + name)

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handle = () =>{
        const values = Object.values(formData)
        if (!inputRegex[regExpression].test(values[0])  && values[0].length > 0) {
            setFormData({...formData, valido:false})
        }
        else {
            setFormData({...formData, valido:true})
        }
    }

    return (
        <>
            <div className="form-group">
                <label>{inputTittle}</label>
                <input
                    className="form-control"
                    type={typeForm}
                    name={name}
                    placeholder={placeholderText}
                    value={Object.values(formData)[0]}
                    onChange={handleChange}
                    onBlur={handle}
                    // onBlur={handle}
                    autoComplete="off"
                />
                { formData.valido === null || formData.valido === true ?
    
                    <label className="text-danger mx-2" id="errorName"></label>
                    :
                    <label className="text-danger mx-2" id="errorName">{errorLabel}</label>

                }

            </div>
        </>
    )
})

export default InputForm