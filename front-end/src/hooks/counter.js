import {useState} from 'react'

const FormHelp = (initialState) => {

    const [number, setNumber] = useState(initialState)


    const removeOne = () => {
        if (number >= 1) {
          setNumber(number - 1)
        }
    }

    const addOne = () => {
        setNumber(number + 1)
      }

    return {number, addOne, removeOne};

}

export default FormHelp