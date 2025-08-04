// import React from 'react'
import "../../assets/css/base.css";
import "../../assets/css/components/shepherds.css"
import shepherds from "../../assets/images/pastores/pastores-info.png";
import { SectionName } from "../../components/SectionName";
export const Shepherds = () => {
  return (
    <>
      <SectionName sectionName={"NUESTROS PASTORES"} />
      <div className="contenedor-shepherds">
        <div className="imagen-shepherds">
          <img src={shepherds} alt="Pastores" />
        </div>
        <div className="descripcion-shepherds">
          <p><b>Pastores Pedro y Elena Gómez</b></p>

          <p>
            Familia Pedro y Elena Gómez son padres de dos hijas y orgullosos
            abuelos de cuatro nietos. La familia ha sido una parte fundamental
            de su vida y ministerio, acompañándolos en cada etapa de su llamado
            pastoral.
          </p>

          <p><b>Conversión</b></p>
          <p>
            El 26 de diciembre de 1992 marcó un momento transformador en sus
            vidas, cuando ambos experimentaron unal profundo encuentro con
            Cristo. Este evento sentó las bases para su posterior llamado al
            ministerio pastoral.
          </p>

          <p><b>Historia Ministerial</b></p>
          <p>
            El llamado al ministerio llegó el 20 de diciembre de 1994 a través
            de su pastor, el Rev. Efraín Acosta. Desde ese momento, Pedro y
            Elena comenzaron a servir con dedicación y fe en diversas iglesias
            tanto en Cuba como en los Estados Unidos. Su primer cargo pastoral
            fue en la iglesia Ríos de Agua Viva en Minas de Camazán, Holguín,
            Cuba, donde sirvieron desde diciembre de 1994 hasta abril de 1996.
            Posteriormente, pastorearon la iglesia Cristo Rompe las Cadenas en
            Antilla, Holguín, Cuba, desde abril de 1996 hasta mayo de 2001,
            impactando a la comunidad con su liderazgo y mensaje.
          </p>

          <p>
            En mayo de 2001, se trasladaron a la iglesia Peniel en Madruga,
            provincia Habana, Cuba, donde sirvieron fielmente hasta junio de
            2006. Luego continuaron su labor en la iglesia Eben-Ezer en Cotorro,
            Ciudad Habana, desde junio de 2006 hasta agosto de 2009. Su
            ministerio se expandió a los Estados Unidos en 2010, cuando
            comenzaron a pastorear la Misión Cristiana El Calvario en Daytona
            Beach hasta 2011. Ese mismo año, asumieron el liderazgo de la
            iglesia Eben-Ezer en Orlando, donde sirvieron desde octubre de 2011
            hasta septiembre de 2014.
          </p>

          <p>
            Entre septiembre de 2014 y febrero de 2015, Pedro y Elena
            ministraron en Clover, Carolina del Sur. Finalmente, en marzo de
            2015, regresaron a Orlando, Florida, donde continúan desarrollando
            su ministerio en la iglesia Eben-Ezer, impactando vidas y
            fortaleciendo la comunidad de fe.
          </p>
          <p><b>Estudios Académicos de:</b></p>

          <p><b>Pedro Gómez</b></p>
          <p>
            Pedro Gómez ha dedicado tiempo a su formación teológica y
            ministerial, obteniendo un Bachillerato en Teología y Biblia a
            través de Edisub. Además, cursó estudios en la Escuela de Superación
            Ministerial (ISUM), alcanzando el cuarto año a nivel de licenciatura
            en Teología y Biblia.
          </p>

          <p><b>Liderazgo Ministerial</b></p>
          <p>
            A lo largo de los años, Pedro y Elena han ocupado importantes roles
            de liderazgo dentro de las comunidades cristianas. Pedro Gómez ha
            sido Presidente de los Estudiantes Pentecostales en Oriente, Cuba, y
            Tesorero Nacional de los Jóvenes de las Asambleas de Dios en Cuba.
            También sirvió como Secretario del Presbiterio en Holguín, Cuba, y
            como Presbítero en Cotorro, Ciudad Habana, Cuba.
          </p>

          <p>
            En adición, fue Presidente Provincial en La Habana, Cuba, y Director
            de Misiones en el Occidente de Cuba, supervisando provincias como
            Matanzas, La Habana, Pinar del Río, y la Isla de la Juventud.
            Durante su tiempo en los Estados Unidos, ha servido como Maestro de
            Evangelismo en Esum (Calvario City Church) y actualmente es
            Presidente de la Alianza Pastoral Internacional, guiando pastores y
            líderes de diversas comunidades.
          </p>

          <p><b>Actualmente</b></p>
          <p>
            Los pastores Pedro y Elena Gómez residen en la ciudad de Orlando,
            Florida, donde continúan liderando el ministerio pastoral en la
            iglesia Eben-Ezer Orlando. Además, dirigen la Alianza Pastoral
            Internacional, sirviendo como mentores y apoyo para
            líderes y pastores.
          </p>
        </div>
      </div>
    </>
  );
};
