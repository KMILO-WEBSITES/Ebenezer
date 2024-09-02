// import React from 'react'
import '../../assets/css/styles.css';
import '../../assets/css/us/shepherds.css';
import shepherds from "../../assets/images/main3.jpeg";
export const Shepherds = () => {
  return (
    <>
    <div className="section-page-name">
    <div className="content-text">
          <strong>Nuestros Pastores</strong>
        </div>
    </div>
    <div className='content'>
    <div className="container-shepherds">
        <img src={shepherds} alt='Pastores' className='shepherds-img'/>

        <div className='shepherds-text'>         
          <div className='shepherds-description'>
            <p>Este vídeo ofrece una visión única de nuestra comunidad de fe, destacando nuestros valores, eventos y enseñanzas clave. Únete a nosotros en este viaje espiritual.</p>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}
