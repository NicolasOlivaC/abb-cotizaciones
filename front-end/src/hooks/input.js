import { useState, useCallback } from 'react'

const inputRegex = [
    "seba",
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    /^[0-9]+$/,
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[.]+[a-zA-Z0-9._-]+$/,
    /[a-zA-Z0-9À-ÿ\u00f1\u00d1.-]+$/,
    /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
]

const Input = (initialState, regExpression) => {
    const [myInput, setInput] = useState(initialState)

    const setInputValue = useCallback(
        (e) => {
            if (e.target.value.length > 0 && inputRegex[regExpression].test(e.target.value)) {
                setInput({ value: e.target.value, valido: true })
            }
            else {
                setInput({ value: e.target.value, valido: false })
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