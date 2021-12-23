import { useState, useCallback } from 'react'

const inputRegex = [
    "seba",
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    /^\d{8}[0-9]/,
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[.]+[a-zA-Z0-9._-]+$/,
    /^[0-9A-Za-zÀ-ÿ \u00f1\u00d1.-]+$/,
    /^[0-9]+[-|‐]{1}[0-9kK]{1}$/,
    /^[0-9]+$/
]

const Input = (initialState, regExpression) => {
    const [myInput, setInput] = useState(initialState)
    const setInputValue = useCallback(
        (e) => {

            switch (regExpression) {
                case 2:
                    if (e.target.value.length > 0 && /^[0-9]+$/.test(e.target.value)) {
                        setInput({ value: e.target.value.trim(), valido: (e.target.value.length === 9 ? true : false) })
                    }
                    else if (e.target.value.length === 0) {
                        setInput({ value: '', valido: false })
                    }
                    break;
                case 4:
                    if (e.target.value.length > 0 && inputRegex[regExpression].test(e.target.value.trim())) {
                        setInput({ value: e.target.value, valido: true })
                    }
                    else {
                        setInput({ value: e.target.value, valido: false })
                    }
                    break;

                default:
                    if (e.target.value.length > 0 && inputRegex[regExpression].test(e.target.value.trim())) {
                        setInput({ value: e.target.value.trim(), valido: true })
                    }
                    else {
                        setInput({ value: e.target.value.trim(), valido: false })
                    }
                    break;
            }
        },
        [],
    )

    const clearField = () =>{
        setInput({value: '', valido: null})
    }

    return { myInput, setInputValue, clearField}
}


export default Input