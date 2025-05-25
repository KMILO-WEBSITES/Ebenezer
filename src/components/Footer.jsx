// import React from 'react'
import "../assets/css/base.css";
import "../assets/css/components/footer.css";
import imagenLogo from '../assets/images/Ebenezer.svg';
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='content-footer'>
      <div className='section-footer'>
        <div className='footer-text'>
          <img alt="logo" src={imagenLogo} className="logo"></img>
          <p>Nuestra misión es alcanzar a las almas mostrando el amor de Cristo y guiarlas a una relación íntima con Dios.</p>
        </div>
      </div>
      <div className='section-footer'>
        <div className='footer-text'>
          <b>Dirección</b>
          <p>6220 South OBT, 410, Orlando, FL 32809, United States</p> 
        </div>
      </div>
      <div className='section-footer'>     
          <div className='footer-text'>
          <b>Servicio de Adoración</b>
          <p>Domingos 11 am</p>
        </div>       
      </div>
      <div className='section-footer'>
        <div className='footer-text'>
          <b>Síguenos</b>
        </div>
        <div className='section-media-text'>
          <a href="https://www.youtube.com/@iglesiaebenezerorlando" className="socialContainer containerOne">
            <FaYoutube className="socialSvg" title="Youtube"/>
          </a>
          <a href="https://www.facebook.com/Iglesiaebenezerorlando" className="socialContainer containerTwo">
            <FaFacebook className="socialSvg" title="Facebook"/>
          </a>
          <a href="https://www.instagram.com/iglesiaebenezerorlando?igsh=MW92N3ZsbjE2MGcxMw==" className="socialContainer containerThree">
            <FaInstagram className="socialSvg" title="Instagram"/>
          </a>
          <a href="https://wa.me/14075366337" className="socialContainer containerFour" target="_blank">
            <FaWhatsapp className="socialSvg" title="Whatsapp"/>
          </a>
        </div>
      </div>
    </div>
  ) 
}

