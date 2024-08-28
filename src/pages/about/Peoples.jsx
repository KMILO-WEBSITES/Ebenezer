// import React from 'react'
import '../../assets/css/styles.css';
import '../../assets/css/peoples.css';
import pastores from "../../assets/images/main3.jpeg";
export const Peoples = () => {
  return (
    <>
    <div className="section-page-name">
    <div className="content-text">
          <strong>Nuestros Pastores</strong>
        </div>
    </div>
    <div className='content'>
    <div className="container-peoples">
        <img src={pastores} alt='Pastores' className='peoples-img'/>

        <div className='peoples-text'>         
          <div className='peoples-description'>
            <p>Este vídeo ofrece una visión única de nuestra comunidad de fe, destacando nuestros valores, eventos y enseñanzas clave. Únete a nosotros en este viaje espiritual.</p>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}
