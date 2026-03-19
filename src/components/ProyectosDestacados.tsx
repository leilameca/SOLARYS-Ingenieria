import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assetPath } from "../lib/asset-path";

const proyectos = [
  {
    title: "Instalación solar fotovoltaica industrial",
    type: "Solar fotovoltaica",
    location: "República Dominicana",
    equipos: "Inversor Solis / estructura / protecciones",
    image: assetPath("/projects/demo-1.jpg"),
  },
  {
    title: "Sistema de bombeo solar para agroindustria",
    type: "Bombeo solar",
    location: "Zona rural, RD",
    equipos: "Bomba sumergible / controlador / IP68",
    image: assetPath("/projects/demo-9.jpg"),
  },
  {
    title: "Mantenimiento electromecánico industrial",
    type: "Electromecanica",
    location: "Nave industrial, RD",
    equipos: "Tableros / capacitores / ATS",
    image: assetPath("/projects/image.png"),
  },
];

export default function ProyectosDestacados() {
  return (
    <section className="pt-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Proyectos destacados</span>
            <h2 className="mt-6 text-5xl text-[color:var(--solarys-deep)]">
              Proyectos  que respaldan nuestro trabajo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
              Cada proyecto refleja nuestra forma de trabajar: precisión técnica, instalación limpia y resultados confiables.
            </p>
          </div>

          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--solarys-deep)]/10 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] shadow-lg shadow-cyan-100/60"
          >
            Ver portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {proyectos.map((p) => (
            <article key={p.title} className="lux-card overflow-hidden rounded-[32px]">
              <div className="relative h-56 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--solarys-deep)]/75 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--solarys-primary-deep)]">
                  {p.type}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-3xl text-[color:var(--solarys-deep)]">{p.title}</h3>
                <div className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--solarys-ink)]/72">
                  <p>
                    <span className="font-bold text-[color:var(--solarys-ink)]">Ubicacion:</span>{" "}
                    {p.location}
                  </p>
                  <p>
                    <span className="font-bold text-[color:var(--solarys-ink)]">Equipos:</span>{" "}
                    {p.equipos}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
