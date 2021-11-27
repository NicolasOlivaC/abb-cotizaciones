import axios from 'axios';
const local = process.env.REACT_APP_LOCAL_HOST

const addFuncionalityResponse = (response) => {
    axios.post(`${local}/changeStatus`, { response })
        .then((received) => {
            console.log(received)
        })
        .catch(error => {
            console.log(error)
        })

}

const changeCotizationStatus = (choose) => {
    console.log(choose)
    axios.post(`${local}/changeStatus`, { choose })
        .then((received) => {
            console.log(received)
        })
        .catch(error => {
            console.log(error)
        })

}

const obtainCotizationData = (setData, ID) =>{
    axios.get(`${local}/obtainDataCotizacion`, {params: {ID: ID}})
    .then((received) => {
        setData([received.data[0], received.data[1], received.data[2]])
    })
    .catch(error => {
        setData({ message: error.response.data.error })
    })
}



export {addFuncionalityResponse, changeCotizationStatus, obtainCotizationData }