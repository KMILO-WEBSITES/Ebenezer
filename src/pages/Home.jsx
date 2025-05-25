
import { Carousel } from '../components/Carousel'
import "../assets/css/base.css";
import "../assets/css/pages/home.css";
import imgmissionVision from "../assets/images/main7.png";

export const Home = () => {
  return (   
    <div className="content">
    <Carousel/>
     <div className="content-all">     
          <div className="container-mission-vision">      
            <div className="mission-vision">
              <div className="mission-vision-text">Ama a Dios, Ama a la gente.</div>
              <h3>Misión</h3>
              <p>
                Nuestra Iglesia existe para alcanzar a las almas mostrando el amor
                de Cristo, y guiarlas a una relación íntima con Dios.
              </p>
    
              <h3>Visión</h3>
              <p>
                Existimos por la necesidad que experimentamos todos de pertenecer a
                una familia. En nuestra iglesia encontrarás a hermanos que te
                aceptarán y te amarán tal y como eres. Te orientarán y guiarán a
                tener una relación íntima con Dios. Te ayudarán a establecer y
                fortalecer en el Señor. Creciendo juntos en el gozo del Señor y en
                Su conocimiento; amándole a El y amando a la gente.
              </p>
            </div>
            <div><img src={imgmissionVision} className="mission-vision-img" /></div>
          </div>
          <div className="info-banner">
          <div className="info-text">
            <h1>Únete a Nosotros</h1>
            <p> Te invitamos a ser parte de esta familia de fe, donde
            juntos crecemos, servimos y adoramos.</p>
            <p> <b>¡Únete a nosotros y sé testigo del
            impacto que podemos lograr en unidad!</b></p>
          </div>
          </div> 
          <div className="container-video">
            <div className="font-video">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/nrYtG5in000"
                title="Yo No Temeré by E.B.O. Worship Team"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="youtube">
              Ya estamos en You<b className="tube">Tube</b>
            </div>
            <div className="youtube-text">
              <div className="video-text">
                <p>
                  Este vídeo ofrece una visión única de nuestra comunidad de fe,
                  destacando nuestros valores, eventos y enseñanzas clave. Únete a
                  nosotros en este viaje espiritual.
                </p>
                <br />
                <a
                  className="url-canal"
                  href="https://www.youtube.com/@iglesiaebenezerorlando"
                  target="_blank"
                >
                  Suscribete al canal
                </a>
              </div>
            </div>
          </div>
          
          <div className="location-us">
            Encuéntranos Aquí
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.3869545478453!2d-81.39853615693814!3d28.465847937000827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7799884e02599%3A0x8068c1a2139088a4!2sIglesia%20De%20Cristo%20Fiel%20Y%20Verdadero%20Ebenezer!5e0!3m2!1ses!2sdo!4v1713742440668!5m2!1ses!2sdo"
              className="content-map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
    </div>    
  );
}

