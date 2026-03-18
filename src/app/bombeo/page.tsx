import Link from "next/link";
import { ArrowRight, Droplets, Gauge, Waves } from "lucide-react";

const points = [
  "Diseno de bombeo segun altura dinamica total y caudal requerido.",
  "Seleccion de bombas sumergibles y de superficie.",
  "Controladores y protecciones para operacion continua.",
  "Aplicacion en fincas, granjas, reservorios y produccion agroindustrial.",
];

export default function BombeoPage() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lux-card rounded-[40px] p-8 md:p-10">
            <span className="eyebrow">Bombeo solar</span>
            <h1 className="mt-6 text-6xl text-[color:var(--solarys-deep)]">Agua con autonomia y control tecnico.</h1>
            <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
              Convertimos el bombeo en una unidad de negocio mucho mas elegante y clara,
              conectando el discurso agricola con una ejecucion de alto valor percibido.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[26px] bg-[color:var(--solarys-light)] p-5">
                <Droplets className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--solarys-ink)]/74">Bombeo limpio y eficiente.</p>
              </div>
              <div className="rounded-[26px] bg-[color:var(--solarys-light)] p-5">
                <Gauge className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--solarys-ink)]/74">Calculo real de demanda hidraulica.</p>
              </div>
              <div className="rounded-[26px] bg-[color:var(--solarys-light)] p-5">
                <Waves className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--solarys-ink)]/74">Aplicacion en campo y entornos remotos.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[linear-gradient(160deg,#47c3cb_0%,#25aab6_44%,#243b71_100%)] p-8 text-white shadow-[0_30px_90px_rgba(36,59,113,0.2)] md:p-10">
            <h2 className="text-5xl text-white">Alcance tecnico</h2>
            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <div key={point} className="rounded-[24px] border border-white/14 bg-white/10 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--solarys-gold-soft)]">
                    Etapa 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/76">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)]"
            >
              Solicitar estudio de bombeo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
