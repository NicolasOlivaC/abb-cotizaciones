import { useState } from 'react'

const verifyRut = (input) => {
    const newOrder = input.split("").reverse().join("")
    const multiply = [2, 3, 4, 5, 6, 7, 2, 3]
    var result = 0
    for (let i = 0; i < input.length; i++) {
        result += newOrder[i] * multiply[i]
    }
    const division = Math.trunc(result / 11)
    const resto = result - (11 * division)
    var newValue = 11 - resto
    if (newValue === 11) {
        return "0"
    }
    if (newValue === 10) {
        return "k"
    }
    else {
        return newValue.toString()
    }
}


const RutFormatter = () => {
    const [rut, setRut] = useState({ formattedRut: '', rawRut: '', valido: null})

    const format = (e) => {
        let newString = e.target.value.replaceAll('.', '').replace("-", '')
        // console.log(/^[0-9]+$/.test(newString))
        console.log(newString)
        if (newString.length <= 9 && /^[0-9]+$/.test(newString) )  {
            console.log("entre aca")
            let leftSide = newString.substring(0, newString.length - 1)
            const calculated = verifyRut(leftSide)
            let rigthSide = newString.substring(newString.length, newString.length - 1)
            leftSide = leftSide.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            let formatted = (newString <= 1 ? rigthSide : leftSide + "-" + rigthSide)
            setRut({ formattedRut: formatted, [e.target.name]: newString, valido: (calculated === rigthSide ? true : false) })
        }
        if(newString.length === 0){
            setRut({ formattedRut: '', [e.target.name]: '', valido: false })
        }
    }

    return { format, rut };
}


export default RutFormatter