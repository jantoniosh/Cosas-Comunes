import React, { useState } from "react";
import { Link } from "react-router-dom";
import fondo from "../../assets/fondos/fondo.jpg";
import nube from "../../assets/fondos/nube.jpg";
import foco from "../../assets/fondos/foco.jpg";
import nopal from "../../assets/fondos/nopal.jpg";
import conejo from "../../assets/fondos/conejo.jpg";
import peces from "../../assets/fondos/peces.jpg";
import abeja from "../../assets/fondos/abeja.jpg";

export const Inicio = () => {
  const [style, setStyle] = useState({
    backgroundImage: `url(${fondo})`,
  });

  const imgNube = (e) => {
    setStyle({
      backgroundImage: `url(${nube})`,
    });
  };

  const imgFoco = (e) => {
    setStyle({
      backgroundImage: `url(${foco})`,
    });
  };

  const imgNopal = (e) => {
    setStyle({
      backgroundImage: `url(${nopal})`,
    });
  };

  const imgConejo = (e) => {
    setStyle({
      backgroundImage: `url(${conejo})`,
    });
  };

  const imgPeces = (e) => {
    setStyle({
      backgroundImage: `url(${peces})`,
    });
  };

  const imgAbeja = (e) => {
    setStyle({
      backgroundImage: `url(${abeja})`,
    });
  };

  const imgFondo = (e) => {
    setStyle({
      backgroundImage: `url(${fondo})`,
    });
  };

  return (
    <>
      <div className="fondo" style={style}>
        <h1>Cosas Comunes de la Vida Común</h1>
        <div id="piezas">
          <div className="pieza">
            <h2>
              <Link to={"/nube"} onMouseOver={imgNube} onMouseLeave={imgFondo}>
                Nube
              </Link>
            </h2>
          </div>
          <div className="pieza">
            <h2>
              <Link to={"/foco"} onMouseOver={imgFoco} onMouseLeave={imgFondo}>
                Foco
              </Link>
            </h2>
          </div>
          <div className="pieza">
            <h2>
              <Link
                to={"/nopal"}
                onMouseOver={imgNopal}
                onMouseLeave={imgFondo}
              >
                Nopal
              </Link>
            </h2>
          </div>
          <div className="pieza">
            <h2>
              <Link
                to={"/conejo"}
                onMouseOver={imgConejo}
                onMouseLeave={imgFondo}
              >
                Conejo
              </Link>
            </h2>
          </div>
          <div className="pieza">
            <h2>
              <Link
                to={"/peces"}
                onMouseOver={imgPeces}
                onMouseLeave={imgFondo}
              >
                Peces
              </Link>
            </h2>
          </div>
          <div className="pieza">
            <h2>
              <Link
                to={"/abeja"}
                onMouseOver={imgAbeja}
                onMouseLeave={imgFondo}
              >
                Abeja
              </Link>
            </h2>
          </div>
          <div className="info">
            <h2>
              <Link to={"/info"}>Info</Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
