import "../assets/css/pages/ministeries.css";
import { SectionName } from "../components/SectionName"
import kidsImag from "../assets/images/small-church-kids.jpg";
import youngImg from "../assets/images/young/young1.png";
import nextEvent from "../assets/images/group/group1.jpg";
import women from "../assets/images/women/1.png";
import men from "../assets/images/man/1.png";
import inter from "../assets/images/intercesion/1.png";
import dance from "../assets/images/dance/1.png";
import worship from "../assets/images/adoracion/1.png";
import royal from "../assets/images/royal/1.png";
import { useNavigate } from 'react-router-dom';
export const Ministeries = () => {
  const navigate = useNavigate();
  return (
    <div className="container-ministeries">
      <SectionName sectionName={"MINISTERIOS"}/>  
        <div className="cards-container-ministeries">
          <div className="card-ministeries" onClick={() => navigate('/kids')}>
            <img src={kidsImag} className="card-image" />
            <div className="card-title">Niños</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/young')}>
            <img src={youngImg} className="card-image" />
            <div className="card-title">Jóvenes</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/groups')}>
            <img src={nextEvent} className="card-image" />
            <div className="card-title">Grupos pequeños</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/women')}>
            <img src={women} className="card-image" />
            <div className="card-title">Mujeres</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/men')}>
            <img src={men} className="card-image" />
            <div className="card-title">Hombres</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/intercession')}>
            <img src={inter} className="card-image" />
            <div className="card-title">Interceción</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/dance')}>
            <img src={dance} className="card-image" />
            <div className="card-title">Danza</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/worship')}>
            <img src={worship} className="card-image" />
            <div className="card-title">Adoración</div>
          </div>
          <div className="card-ministeries" onClick={() => navigate('/rangers')}>
            <img src={royal} className="card-image" />
            <div className="card-title">Royal Rangers</div>
          </div>
        </div> 
    </div>
  );
};
