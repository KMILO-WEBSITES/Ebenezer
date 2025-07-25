import "../../assets/css/base.css";
import kidsImag from "../../assets/images/small-church-kids.jpg";
import { Gallery } from "../../components/Gallery";
import { ReturnButton } from "../../components/ReturnButton";
import { SectionName } from "../../components/SectionName";
export const Kids = () => {
  const path = "kids/";
  const countImg = 7;
  const nameImg = "kids";
  return (
    <>
      <SectionName sectionName={"NIÑOS"} />
      <div className="contenedor">
        <div className="imagen">
          <img src={kidsImag} />
        </div>
        <div className="descripcion">
          <p>
            Nuestro propósito es proporcionar una base sólida en la fe desde una
            edad temprana, enseñando a los niños acerca de Dios, la Biblia, y
            los principios cristianos en un entorno seguro, amoroso y adecuado
            para su desarrollo. Nos enfocamos en cultivar en los niños una
            relación temprana con Dios y ayudarlos a entender y aplicar los
            valores cristianos en su vida diaria teniendo como objetivo guiar a
            los niños en sus primeros pasos de fe, ayudándolos a conocer y amar
            a Dios, aprender la Biblia, y vivir de acuerdo con los principios
            cristianos, todo dentro de un entorno seguro y lleno de amor.
          </p>
        </div>
        <ReturnButton />
      </div>
      <Gallery path={path} countImg={countImg} nameImg={nameImg} />
    </>
  );
};
