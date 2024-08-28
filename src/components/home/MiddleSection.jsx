//  import React from 'react'
import "../../assets/css/middleSection.css";

export const MiddleSection = () => {
  return (
    <div className='content-all'>      

      <div className="container-video">
        <iframe className='video' src="https://www.youtube.com/embed/nrYtG5in000" title="Yo No Temeré by E.B.O. Worship Team" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

        <div className='video-text'>         
          <div className='video-description'>
            <p>Este vídeo ofrece una visión única de nuestra comunidad de fe, destacando nuestros valores, eventos y enseñanzas clave. Únete a nosotros en este viaje espiritual.</p>
          </div>
          <a className='url-canal' href='https://www.youtube.com/@iglesiaebenezerorlando' target="_blank">Ir al canal</a>
        </div>
      </div>

      <div className='mision-vision'>
        <div className="mision-vision-text">
          <strong>Ama a Dios, Ama a la gente.</strong>
        </div>
        <div  className="mision-vision-text-mv">
          <h2>Misión</h2>
          <p>Nuestra Iglesia existe para alcanzar a las almas mostrando el amor de Cristo, y guiarlas a una relación íntima con Dios.</p>

          <h2>Visión</h2>
          <p>Discipular, Enviar, Establecer, y Renovar.</p>
        </div>
      </div>

      <div className='map'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.3869545478453!2d-81.39853615693814!3d28.465847937000827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7799884e02599%3A0x8068c1a2139088a4!2sIglesia%20De%20Cristo%20Fiel%20Y%20Verdadero%20Ebenezer!5e0!3m2!1ses!2sdo!4v1713742440668!5m2!1ses!2sdo" className='content-map' loading="lazy" ></iframe>

      </div>

    </div>
  )
}
