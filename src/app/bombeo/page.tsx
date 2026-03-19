import Link from "next/link";
import { ArrowRight, Droplets, Gauge, Waves } from "lucide-react";

const points = [
  "Diseño del sistema según caudal requerido y condiciones del terreno.",
  "Selección de bombas adecuadas para garantizar eficiencia y durabilidad.",
  "Integración de controladores y protecciones para operación continua.",
  "Implementación en fincas, industrias y sistemas de producción.",
];

export default function BombeoPage() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lux-card rounded-[40px] p-8 md:p-10">
            <span className="eyebrow">Bombeo solar</span>
            <h1 className="mt-6 text-6xl text-[color:var(--solarys-deep)]">Agua garantizada con sistemas de bombeo eficientes.</h1>
            <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
              Diseñamos sistemas de bombeo solar adaptados a cada necesidad, garantizando suministro constante, eficiencia energética y operación confiable en cualquier entorno.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[26px] bg-[color:var(--solarys-light)] p-5">
                <Droplets className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--solarys-ink)]/74">Bombeo eficiente y continuo Sistemas diseñados para operar sin interrupciones y con bajo consumo energético.
 </p>
              </div>
              <div className="rounded-[26px] bg-[color:var(--solarys-light)] p-5">
                <Gauge className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--solarys-ink)]/74">Cálculo hidráulico preciso
Dimensionamiento basado en caudal, altura y demanda real.</p>
              </div>
              <div className="rounded-[26px] bg-[color:var(--solarys-light)] p-5">
                <Waves className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--solarys-ink)]/74">Aplicación en entornos exigentes
Soluciones para fincas, industrias y zonas remotas.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[linear-gradient(160deg,#47c3cb_0%,#25aab6_44%,#243b71_100%)] p-8 text-white shadow-[0_30px_90px_rgba(36,59,113,0.2)] md:p-10">
            <h2 className="text-5xl text-white">Cómo funciona tu sistema de bombeo?</h2>
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
