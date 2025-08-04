import "../assets/css/pages/ministeries.css";
import { SectionName } from "../components/SectionName";
import kidsImag from "../assets/images/kids/kids1.jpg";
import youngImg from "../assets/images/young/jovenes-info.jpg";
import women from "../assets/images/women/women-info.jpg";
import men from "../assets/images/man/1.png";
import inter from "../assets/images/intercesion/1.png";
import dance from "../assets/images/dance/1.png";
import worship from "../assets/images/adoracion/adoracion-info.jpg";
import royal from "../assets/images/royal/1.png";
import { useNavigate } from "react-router-dom";
export const Ministeries = () => {
  const navigate = useNavigate();
  return (
    <div className="container-ministeries">
      <SectionName sectionName={"MINISTERIOS"} />
      <div className="cards-container-ministeries">
        <div className="card-ministeries" onClick={() => navigate("/kids")}>
          <div className="card-image-container">
            <img src={kidsImag} alt="Adoración" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Niños</div>
          </div>
        </div>
        <div className="card-ministeries" onClick={() => navigate("/young")}>
          <div className="card-image-container">
            <img src={youngImg} alt="Jóvenes" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Jóvenes</div>
          </div>
        </div>
        <div className="card-ministeries" onClick={() => navigate("/women")}>
          <div className="card-image-container">
            <img src={women} alt="Mujeres" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Mujeres</div>
          </div>
        </div>

        <div className="card-ministeries" onClick={() => navigate("/men")}>
          <div className="card-image-container">
            <img src={men} alt="Hombres" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Hombres</div>
          </div>
        </div>
        <div
          className="card-ministeries"
          onClick={() => navigate("/intercession")}
        >
          <div className="card-image-container">
            <img src={inter} alt="Intercesión" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Intercesión</div>
          </div>
        </div>

        <div className="card-ministeries" onClick={() => navigate("/dance")}>
          <div className="card-image-container">
            <img src={dance} alt="Danza" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Danza</div>
          </div>
        </div>

        <div className="card-ministeries" onClick={() => navigate("/worship")}>
          <div className="card-image-container">
            <img src={worship} alt="Adoración" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Adoración</div>
          </div>
        </div>
        <div className="card-ministeries" onClick={() => navigate("/rangers")}>
          <div className="card-image-container">
            <img src={royal} alt="Royal Rangers" className="card-image" />
          </div>
          <div className="card-title-container">
            <div className="card-title">Royal Rangers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
