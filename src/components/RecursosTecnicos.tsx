import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recursos = [
  {
    title: "Guia de sistemas on-grid, off-grid e hibridos",
    desc: "Una presentacion simple de arquitecturas solares y escenarios de uso para operaciones comerciales e industriales.",
    href: "/solar",
    tag: "Solar",
  },
  {
    title: "Guia tecnica de bombeo solar IP68",
    desc: "Criterios para seleccionar bombas, controladores y diseno hidraulico con enfoque en confiabilidad de campo.",
    href: "/bombeo",
    tag: "Bombeo",
  },
  {
    title: "ATS, capacitores y mantenimiento industrial",
    desc: "Resumen ejecutivo de soluciones electromecanicas que protegen continuidad, eficiencia y estabilidad operativa.",
    href: "/electromecanica",
    tag: "Electromecanica",
  },
];

export default function RecursosTecnicos() {
  return (
    <section className="pt-24">
      <div className="section-shell">
        <div className="rounded-[38px] bg-[color:var(--solarys-light)] px-7 py-10 shadow-[0_20px_60px_rgba(36,59,113,0.07)] md:px-10">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Recursos tecnicos</span>
              <h2 className="mt-6 text-5xl text-[color:var(--solarys-deep)]">
                Contenido que educa y tambien vende mejor.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
                Replanteamos esta seccion como una biblioteca de confianza: clara, sobria
                y conectada con las rutas de servicio del sitio.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--solarys-deep)]/10 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] shadow-lg shadow-cyan-100/50"
            >
              Consultar con un tecnico
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {recursos.map((r) => (
              <article key={r.title} className="lux-card group rounded-[30px] p-7">
                <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--solarys-primary-deep)] shadow-sm">
                  {r.tag}
                </span>
                <h3 className="mt-6 text-3xl text-[color:var(--solarys-deep)]">{r.title}</h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--solarys-ink)]/70">
                  {r.desc}
                </p>
                <Link
                  href={r.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)]"
                >
                  Ver recurso
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
