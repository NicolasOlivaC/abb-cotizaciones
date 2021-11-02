// import PropTypes from 'prop-types'
import logo from '../../image/abb-logo.png'
const navBar = props => {
    return (
        <div className="navBar">
            <img src = {logo} alt="logo abb"/>
            <ul className="listItem">
                <li>PÁGINA PRINCIPAL</li>
                <li>SOBRE NOSOTROS</li>
                <li>QUIENES SOMOS</li>
                <li>CONTACTOS</li>
                <li>CONTACT CENTERS</li>
            </ul>
        </div>
    )
}

export default navBar
