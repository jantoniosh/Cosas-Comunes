import { Route, Routes } from "react-router-dom";
import { Info, Inicio } from "../pages";
import {
  AbejaP5,
  ConejoP5,
  Cosa,
  FocoP5,
  NopalP5,
  NubeP5,
  PecesP5,
} from "../components";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/nube"
          element={<Cosa nombre={"Nube"} sketch={<NubeP5 />} />}
        />
        <Route
          path="/foco"
          element={<Cosa nombre={"Foco"} sketch={<FocoP5 />} />}
        />
        <Route
          path="/nopal"
          element={<Cosa nombre={"Nopal"} sketch={<NopalP5 />} />}
        />
        <Route
          path="/conejo"
          element={<Cosa nombre={"Conejo"} sketch={<ConejoP5 />} />}
        />
        <Route
          path="/peces"
          element={<Cosa nombre={"Peces"} sketch={<PecesP5 />} />}
        />
        <Route
          path="/abeja"
          element={<Cosa nombre={"Abeja"} sketch={<AbejaP5 />} />}
        />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};
