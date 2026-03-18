import { assetPath } from "../lib/asset-path";

export type ProjectCategory = "solar" | "bombeo" | "electromecanica";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  equipos: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Instalación Solar Fotovoltaica Industrial",
    category: "solar",
    location: "República Dominicana",
    equipos: "Inversor Solis / Estructura / Protecciones",
    image: assetPath("/projects/demo-1.jpg"),
  },
  {
    id: "p2",
    title: "Sistema de Bombeo Solar para Agroindustria",
    category: "bombeo",
    location: "Zona rural (RD)",
    equipos: "Bomba sumergible / Controlador / IP68",
    image: assetPath("/projects/demo-2.jpg"),
  },
  {
    id: "p3",
    title: "Mantenimiento Electromecánico Industrial",
    category: "electromecanica",
    location: "Nave Industrial (RD)",
    equipos: "Tableros / Capacitores / ATS",
    image: assetPath("/projects/demo-3.jpg"),
  },
  {
    id: "p4",
    title: "Sistema Solar Híbrido para Local Comercial",
    category: "solar",
    location: "Santo Domingo, RD",
    equipos: "Inversor híbrido / Baterías / Protecciones",
    image: assetPath("/projects/demo-1.jpg"),
  },
  {
    id: "p5",
    title: "Bombeo Solar para Ganadería",
    category: "bombeo",
    location: "RD",
    equipos: "Controlador / Paneles / Protección IP",
    image: assetPath("/projects/demo-2.jpg"),
  },
  {
    id: "p6",
    title: "Instalación y mantenimiento de ATS",
    category: "electromecanica",
    location: "RD",
    equipos: "ATS / Tablero / Protecciones",
    image: assetPath("/projects/demo-3.jpg"),
  },
];
