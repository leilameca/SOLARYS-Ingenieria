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
    title: "Instalación solar fotovoltaica industrial",
    category: "solar",
    location: "República Dominicana",
    equipos: "Inversor Solis / estructura / protecciones",
    image: assetPath("/projects/demo-1.jpg"),
  },
  {
    id: "p2",
    title: "Sistema de bombeo solar para agroindustria",
    category: "bombeo",
    location: "Zona rural, RD",
    equipos: "Bomba sumergible / controlador / IP68",
    image: assetPath("/projects/demo-9.jpg"),
  },
  {
    id: "p3",
    title: "Mantenimiento electromecánico industrial",
    category: "electromecanica",
    location: "Nave industrial, RD",
    equipos: "Tableros / capacitores / ATS",
    image: assetPath("/projects/image.png"),
  },
  {
    id: "p4",
    title: "Sistema solar híbrido para local comercial",
    category: "solar",
    location: "Santo Domingo, RD",
    equipos: "Inversor híbrido / baterías / protecciones",
    image: assetPath("/projects/demo-1.jpg"),
  },
  {
    id: "p5",
    title: "Bombeo solar para ganadería",
    category: "bombeo",
    location: "RD",
    equipos: "Controlador / paneles / protección IP",
    image: assetPath("/projects/demo-9.jpg"),
  },
  {
    id: "p6",
    title: "Instalación y mantenimiento de ATS",
    category: "electromecanica",
    location: "RD",
    equipos: "ATS / tableros / protecciones",
    image: assetPath("/projects/image.png"),
  },
];
