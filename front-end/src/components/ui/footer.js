import React from 'react'
import face from '../../image/icons/face.png'
import linkedin from '../../image/icons/linkedin.png'
import youtube from '../../image/icons/youtube.png'
import twitter from '../../image/icons/twitter.png'
import pinterest from '../../image/icons/p.png'


const Footer = props => {
    return (
        <div className="d-flex flex-row footer ">
            <div className="footerContainer">
                <h4 className="footerTittle">ENLACES MAS VISITADOS</h4>
                <div className="footerContainer1">
                    <ul className="px-0">
                        <li><a className="customColor" href="/south-america/eventos">Eventos</a></li>
                        <li><a className="customColor" href="/south-america/capacitaciones">Capacitaciones</a></li>
                        <li><a className="customColor" href="https://new.abb.com/south-america/sostenibilidad">Sostenibilidad</a></li>
                        <li><a className="customColor" href="/south-america/sobre-nosotros/proveedores">Proveedores | Suministrar a ABB</a></li>
                        <li><a className="customColor" href="/south-america/principal/catalogo-comercial-abb-peru">Lista de precios ABB Perú</a></li>
                        <li><a className="customColor" href="/south-america/principal/lista-de-precios-electrification-argentina">Lista de precios EL Argentina</a></li>
                        <li><a className="customColor" href="https://new.abb.com/south-america/mapa-distribuidores-sudamerica">Mapa de Distribuidores de ABB en Sudamérica</a></li>
                        <li><a className="customColor" href="https://new.abb.com/south-america/sobre-nosotros/quienes-somos/oficinas-sudamerica/peru/declaracion-de-beneficiario-final">Declaración de beneficiario final ABB Perú</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerContainer">
                <h4 className="footerTittle" >SÍGUENOS EN</h4>
                <div className="d-flex flex-row gap-1">
                    <a href="http://www.facebook.com/ABB" >
                        <img src={face} className="imageIcon" />
                    </a>
                    <a href="http://www.linkedin.com/company/277579" className="linkedin">
                        <img src={linkedin} className="imageIcon" />
                    </a>
                    <a href="http://www.youtube.com/abb" className="youtube">
                        <img src={youtube} className="imageIcon" />
                    </a>
                    <a href="https://twitter.com/ABBgroupnews" className="twitter">
                        <img src={twitter} className="imageIcon" />
                    </a>
                    <a href="http://www.pinterest.com/abbgroup/" className="pinterest">
                        <img src={pinterest} className="imageIcon" />
                    </a>
                </div>
            </div>
            <div className="footerContainer">
                <h4 className="footerTittle" >EVENTS</h4>
                <div>
                    <ul className="px-0">
                        <li><a className="customColor" href="/events/calendar">Customer events</a></li>
                        <li><a className="customColor" href="/investorrelations/financial-calendar">Investor events</a></li>
                        <li><a className="customColor" href="/media/events-2016-2020">Media events</a></li>
                    </ul>
                </div>

            </div>
            <div className="footerContainer">
                <h4 className="footerTittle" >CURRENT SHARE PRICE</h4>
            </div>
        </div>
    )
}



export default Footer
