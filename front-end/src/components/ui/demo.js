import React from 'react'
import { useParams } from "react-router-dom";

const Demo = props => {
    let params = useParams();
    console.log(params.demoID)
    if (params.demoID) {
        return (
            <div>
                <h1>VISTA DE LA COTIZACIÓN {params.demoID}</h1>
            </div>
        )
    }
    else{
        return (
            <h1>Algo salio mal....</h1>
        )
    }

}



export default Demo
