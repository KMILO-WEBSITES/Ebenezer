import { Carousel } from "../components/Carousel";
import "../assets/css/base.css";
import "../assets/css/pages/home.css";
import { Mision } from "../components/Mision";

export const Home = () => {
  return (
    <div className="content">
      <Carousel />
      <div className="content-all">
        <Mision />
        <div className="info-banner">
          <div className="info-text">
            <h1>Únete a Nosotros</h1>
            <p>
              {" "}
              Te invitamos a ser parte de esta familia de fe, donde juntos
              crecemos, servimos y adoramos.
            </p>
            <p>
              {" "}
              <b>
                ¡Únete a nosotros y sé testigo del impacto que podemos lograr en
                unidad!
              </b>
            </p>
          </div>
        </div>
        <div className="container-video">
          <div className="videos-wrapper">
            <div className="video-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/nrYtG5in000"
                title="Yo No Temeré by E.B.O. Worship Team"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="video-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/wM4RPr6QXP8"
                title="A Dios sea la gloria interpretado por Francisco Prieto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="video-item">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/iBnk3pjb5vU"
                title="El Cordero Y El León (Lion And The Lamb @BethelMusic )"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div className="youtube">
            Ya estamos en You<b className="tube">Tube</b>
          </div>
          <div className="youtube-text">
            <div className="video-text">
              <a
                className="url-canal"
                href="https://www.youtube.com/@iglesiaebenezerorlando"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suscríbete al canal
              </a>
            </div>
          </div>
        </div>

        <div className="location-us">Encuéntranos Aquí</div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4376315631603!2d-81.40097672504939!3d28.4663642916082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77dcf1e696577%3A0xf7ab1b29eb717085!2sIglesia%20Eben-Ezer%20Orlando!5e0!3m2!1ses!2sdo!4v1753111159973!5m2!1ses!2sdo"
            className="content-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};