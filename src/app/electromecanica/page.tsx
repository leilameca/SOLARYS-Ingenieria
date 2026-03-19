import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Zap } from "lucide-react";

const points = [
  "Integración de sistemas ATS y tableros para transferencia automática de energía.",
  "Corrección del factor de potencia mediante bancos de capacitores.",
  "Mantenimiento preventivo y correctivo en sistemas eléctricos industriales.",
  "Soporte técnico enfocado en continuidad y estabilidad operativa.",
];

export default function ElectromecanicaPage() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[40px] bg-[color:var(--solarys-deep)] p-8 text-white shadow-[0_28px_80px_rgba(36,59,113,0.24)] md:p-10">
            <span className="eyebrow border-white/12 bg-white/8 text-white before:bg-[linear-gradient(135deg,#ffd38a,#47c3cb)]">
              Electromecánica
            </span>
            <h1 className="mt-6 text-6xl text-white">Infraestructura eléctrica diseñada para operar sin interrupciones.</h1>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Desarrollamos soluciones electromecánicas que garantizan estabilidad, protección y continuidad operativa en entornos industriales y comerciales.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[26px] border border-white/12 bg-white/8 p-5">
                <Zap className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                <p className="mt-4 text-sm leading-6 text-white/74">Transferencia eléctrica confiable
Sistemas diseñados para garantizar suministro continuo sin interrupciones.</p>
              </div>
              <div className="rounded-[26px] border border-white/12 bg-white/8 p-5">
                <Cpu className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                <p className="mt-4 text-sm leading-6 text-white/74">Tableros y control de integración
Soluciones eléctricas adaptadas a cada operación con control eficiente.
</p>
              </div>
              <div className="rounded-[26px] border border-white/12 bg-white/8 p-5">
                <ShieldCheck className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                <p className="mt-4 text-sm leading-6 text-white/74">Mantenimiento y continuidad operativa
Soporte técnico para asegurar el funcionamiento constante de tus sistemas.</p>
              </div>
            </div>
          </div>

          <div className="lux-card rounded-[40px] p-8 md:p-10">
            <h2 className="text-5xl text-[color:var(--solarys-deep)]">Soluciones aplicadas en campo</h2>
            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <div key={point} className="rounded-[24px] bg-[color:var(--solarys-light)] px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--solarys-primary-deep)]">
                    Solucion 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--solarys-ink)]/74">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--solarys-gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)]"
            >
              Solicitar evaluación técnica
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
