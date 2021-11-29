import axios from 'axios';
const local = process.env.REACT_APP_LOCAL_HOST

const addFuncionalityResponse = (funcionality, ID, por) => {
    axios.post(`${local}/addFuncionality`, { funcionality, ID, por })
        .then((received) => {
            const {dataSelect} = received.data
            document.getElementById("myPregunta").innerHTML += `
            <div>
                <span><strong>${dataSelect[0].por} - ${dataSelect[0].fecha_ingreso}</strong></span>
                <p>${dataSelect[0].pregunta}</p>
            </div>
            `
            
        })
        .catch(error => {
            console.log(error)
        })

}

const changeCotizationStatus = (choose, ID) => {
    console.log(choose)
    axios.post(`${local}/changeStatusCotizacion`, { choose, ID })
        .then((received) => {
            console.log(received)
            document.getElementById('myEstado').innerHTML = `Estado: ${received.data.nuevoEstado}`
        })
        .catch(error => {
            console.log(error)
        })
}

const obtainCotizationData = (setData, ID) => {
    axios.get(`${local}/obtainDataCotizacion`, { params: { ID: ID } })
        .then((received) => {
            setData([received.data[0], received.data[1], received.data[2]])
        })
        .catch(error => {
            setData({ message: error.response.data.error })
        })
}



export { addFuncionalityResponse, changeCotizationStatus, obtainCotizationData }