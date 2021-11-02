import {createContext, useState} from 'react'

export const DataContext = createContext();

export const ContextProvider = ({children}) =>{

    const [nombre, setNombre] = useState({ nombre: '' })
    const [apellido, setApellido] = useState({ apellido: '' })
    const [telefono, setTelefono] = useState({ telefono: '' })
    const [email, setEmail] = useState({ email: '' })
    const [empresa, setEmpresa] = useState({ empresa: '' })

    return(
        <DataContext.Provider value={{
            nombre:{nombre, setNombre},
            apellido:{apellido, setApellido},
            telefono: {telefono, setTelefono},
            email: {email, setEmail},
            empresa: {empresa, setEmpresa}
        }}>
            {children}
        </DataContext.Provider>
    )
}


//decidi no utilizar context... no tenia mucho sentido