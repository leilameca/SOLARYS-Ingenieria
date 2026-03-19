import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";

const categoryLabel: Record<string, string> = {
  all: "Todos",
  solar: "Solar fotovoltaica",
  bombeo: "Bombeo solar",
  electromecanica: "Electromecanica",
};

export default function ProyectosPage() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="rounded-[40px] bg-white px-7 py-10 shadow-[0_28px_80px_rgba(36,59,113,0.1)] md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">Portfolio tecnico</span>
              <h1 className="mt-6 text-6xl text-[color:var(--solarys-deep)]">Proyectos</h1>
              <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
                Presentamos el portafolio como una evidencia real de ejecución: proyectos claros, bien estructurados y fáciles de evaluar.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--solarys-gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] shadow-xl shadow-amber-200/60"
            >
              Cotizar proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(categoryLabel).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className="rounded-full border border-[color:var(--solarys-deep)]/10 bg-[color:var(--solarys-light)] px-4 py-2 text-sm font-semibold text-[color:var(--solarys-deep)]"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.id}
                className="lux-card overflow-hidden rounded-[32px]"
              >
                <div className="relative h-56 w-full">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--solarys-deep)]/70 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--solarys-primary-deep)]">
                    {categoryLabel[p.category]}
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
      </div>
    </section>
  );
}
