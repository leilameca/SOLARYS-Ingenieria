import Link from "next/link";
import { ArrowRight, BatteryCharging, PanelsTopLeft, SunMedium } from "lucide-react";

const points = [
  "Sistemas on-grid para ahorro y medicion neta.",
  "Arquitecturas off-grid e hibridas para autonomia parcial o total.",
  "Dimensionamiento con enfoque en carga, respaldo y crecimiento futuro.",
  "Instalacion con criterio estetico y soporte postventa.",
];

export default function SolarPage() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[40px] bg-[linear-gradient(135deg,#243b71_0%,#2d4b8e_50%,#47c3cb_100%)] p-8 text-white shadow-[0_30px_90px_rgba(36,59,113,0.24)] md:p-10">
            <span className="eyebrow border-white/10 bg-white/10 text-white before:bg-[linear-gradient(135deg,#ffd38a,#47c3cb)]">
              Energia solar
            </span>
            <h1 className="mt-6 text-6xl text-white">Solar fotovoltaica con presencia premium.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
              Esta pagina posiciona la unidad solar como una solucion seria y aspiracional:
              limpia, rentable, bien presentada y lista para empresas que buscan valor visible.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[26px] border border-white/12 bg-white/10 p-5">
                <SunMedium className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                <p className="mt-4 text-sm leading-6 text-white/74">Generacion limpia y estable.</p>
              </div>
              <div className="rounded-[26px] border border-white/12 bg-white/10 p-5">
                <PanelsTopLeft className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                <p className="mt-4 text-sm leading-6 text-white/74">Instalacion ordenada y corporativa.</p>
              </div>
              <div className="rounded-[26px] border border-white/12 bg-white/10 p-5">
                <BatteryCharging className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                <p className="mt-4 text-sm leading-6 text-white/74">Escenarios hibridos y respaldo energetico.</p>
              </div>
            </div>
          </div>

          <div className="lux-card rounded-[40px] p-8 md:p-10">
            <h2 className="text-5xl text-[color:var(--solarys-deep)]">Lo que incluye</h2>
            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <div key={point} className="flex items-center gap-4 rounded-[24px] bg-[color:var(--solarys-light)] px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--solarys-deep)] text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-6 text-[color:var(--solarys-ink)]/74">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--solarys-gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)]"
            >
              Solicitar propuesta solar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
