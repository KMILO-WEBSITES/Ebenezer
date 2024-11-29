// import React from 'react'
import '../assets/css/styles.css';
import event1 from "../assets/images/accion_de_gracias.jpg";
import event2 from "../assets/images/aniversario.jpg";
import event3 from "../assets/images/event_mujeres.png";
export const Events = () => {
  return (
    <>
    <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          EVENTOS
        </div>
      </div>
      <div className="content">
      <div className="container-center center-fade-in-bottom">
          <img src={event1} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
          El Día de Acción de Gracias tiene raíces que pueden conectarse con la fe y la 
          gratitud a Dios, valores fundamentales para muchas iglesias cristianas.
           Desde sus orígenes, esta celebración ha sido vista como un acto de
            reconocimiento a la provisión divina, inspirado por las festividades
             de cosecha en las Escrituras. En muchas iglesias, este día se celebra 
             con servicios especiales donde se elevan oraciones de gratitud a Dios
              por las bendiciones recibidas durante el año, tanto materiales como espirituales. Es una oportunidad para reflexionar sobre el papel de la fe en la vida diaria, fortaleciendo la comunidad de creyentes en un espíritu de unidad y generosidad. Además, muchas congregaciones aprovechan la ocasión para realizar obras de caridad, demostrando el amor cristiano al compartir alimentos y recursos con los más necesitados, siguiendo el ejemplo de Jesús.
              </b></p>
            </div>
          </div>
        </div>   
        <div className="container-center center-fade-in-bottom">          
          <div className="center-text">
            <div className="center-description">
          <p><b>
          El 13º aniversario de la Iglesia Ebenezer en Orlando es una ocasión especial
           para celebrar la fidelidad de Dios y el crecimiento de una comunidad de fe 
           que ha impactado tantas vidas. Durante más de una década, esta iglesia ha sido 
           un faro de esperanza, adoración y servicio, guiando a las personas a una relación
            más profunda con Cristo. Este aniversario es un momento para recordar los 
            comienzos humildes, agradecer a Dios por Su provisión constante y renovar el 
            compromiso con la misión de llevar el evangelio a cada rincón de Orlando y 
            más allá. Es una oportunidad para unir a los miembros en adoración, 
            testificar de Su gracia, y mirar hacia el futuro con expectativas de nuevas
             bendiciones y victorias en el nombre del Señor. ¡Que este aniversario sea
              un recordatorio del propósito y la promesa que Dios ha puesto
               sobre la Iglesia Ebenezer!
              </b></p>
            </div>
          </div>
          <img src={event2} alt="" className="center-img"/>
        </div>     
        <div className="container-center center-fade-in-bottom">
          <img src={event3} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
          El Quinto Congreso de Mujeres de la Iglesia Ebenezer en Orlando, bajo el poderoso 
          lema "Elegidas para un Propósito", es una convocatoria divina para todas las mujeres
           que desean profundizar en su identidad y misión en Cristo. Este evento especial
            es una oportunidad para reflexionar sobre el llamado único que Dios ha colocado
             en cada una de nuestras vidas, equipándonos con herramientas espirituales para
              cumplirlo con valentía y fe. A través de momentos de adoración,
               enseñanza bíblica, y testimonios inspiradores, las participantes serán 
               fortalecidas en su caminar con Dios y desafiadas a vivir conforme a
                Su propósito. Es una jornada diseñada para mujeres de todas las edades 
                que buscan avivar su pasión por el Señor y ser agentes de cambio en
                sus familias, iglesias y comunidades. ¡Prepárate para ser transformada
                 y renovada, porque tú has sido elegida para un propósito eterno!
              </b></p>
            </div>
          </div>
        </div>   
      </div>
    </>
  )
}
