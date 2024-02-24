import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Cosa.scss";
import { FocoP5 } from "../FocoP5/FocoP5";
export const Cosa = ({ nombre, sketch }) => {
  return (
    <>
      <div class="container">
        <h1>{nombre}</h1>
        {sketch}
        <div class="inicio">
          <Link to={"/"}>
            <h1>
              <FontAwesomeIcon icon={faHouse} />
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};
