// import PropTypes from 'prop-types'
import logo from '../../image/abb-logo.png'
import { Link } from "react-router-dom";
const navBar = props => {
    return (

        <div className="navBar">
            <img src={logo} alt="logo abb" />
            <ul className="listItem">
                <li> <Link className="navbarA" to={`/`}>PÁGINA PRINCIPAL</Link> </li>
                <li> <Link className="navbarA" to={`/`}>SOBRE NOSOTROS</Link> </li>
                <li> <Link className="navbarA" to={`/`}>QUIENES SOMOS</Link> </li>
                <li> <Link className="navbarA" to={`/`}>CONTACTOS</Link> </li>
                <li> <Link className="navbarA" to={`/`}>CONTACT CENTERS</Link> </li>

            </ul>
        </div>


    )
}

export default navBar
