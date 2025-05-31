import mision1 from "../assets/images/mision1.jpg";
import mision2 from "../assets/images/mision2.jpg";
import mision3 from "../assets/images/mision3.jpg";
import "../assets/css/components/mision.css";

export const Mision = () => {
  return (
    <>
      <section className="custom-section">
        <div className="text-content">
          <h3>Ama a Dios, Ama a la gente.</h3>
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

        <div className="image-collage">
          <img
            src={mision1}
            alt="Imagen 1"
            className="image image-1"
          />
          <img
            src={mision2}
            alt="Imagen 2"
            className="image image-2"
          />
          <img
            src={mision3}
            alt="Imagen 3"
            className="image image-3"
          />
        </div>
      </section>
    </>
  );
};
