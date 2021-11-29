import React from 'react'

const TableItemCaractMotor = ({ data }) => {
    console.log("Renderice TableItemCaractMotor")
    return (
        <div>
            <div className="contentTable">
                <div>
                    <li >nema_frame: {data.nema_frame}</li>
                    <li>Voltaje: {data.voltaje}</li>
                    <li>rpm: {data.rpm}</li>
                    <li>hp: {data.hp}</li>
                </div>
                <div>
                    <li>Disc_sym: {data.disc_sym}</li>
                    <li>C dim: {data.c_dim}</li>
                    <li>aprx wt: {data.aprx_wt}</li>
                    <li>Full load efficiency: {data.full_load_efficiency}</li>
                </div>
            </div>
        </div>
    )
}




export default TableItemCaractMotor
