import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Info.scss";

export const Info = () => {
  return (
    <>
      <h1>Cosas Comunes de la Vida Común</h1>
      <div className="desc">
        <h2>
          Serie de animaciones mostrando elementos que se pueden apreciar con
          regularidad, estas animaciones fueron desarrolladas en Processing. Los
          objetos van desde cosas que se encuentran en la naturaleza como son
          plantas y animales, hasta objetos que se pueden encontrar en el hogar
          como focos, tazas, entre otras cosas. Estas animaciones podrán
          evolucionar con el tiempo a pequeñas instalaciones individuales.
        </h2>

        <h2>Realizados por <a href="https://antoniosalinas.com/" target="_blank">Antonio Salinas</a> en el año 2019</h2>
      </div>
      <Link to={"/"}>
        <h1>
          <FontAwesomeIcon icon={faHouse} />
        </h1>
      </Link>
    </>
  );
};
