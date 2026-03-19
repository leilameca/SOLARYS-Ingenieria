import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Gauge, Headphones, ShieldCheck, SunMedium } from "lucide-react";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import RecursosTecnicos from "../components/RecursosTecnicos";
import ProyectosDestacados from "../components/ProyectosDestacados";
import { assetPath } from "../lib/asset-path";

const pillars = [
  "Soluciones adaptadas a cada necesidad energética.",
  "Instalaciones con estándares técnicos profesionales.",
  "Sistemas diseñados para máxima eficiencia y durabilidad.",
];

const process = [
  "Evaluación técnica del proyecto y necesidades energéticas.",
  "Diseño de solución personalizada y propuesta clara.",
  "Instalación profesional y puesta en marcha del sistema.",
  "Soporte técnico y mantenimiento para operación continua.",
];

const partners = [
  { name: "Solis", logo: assetPath("/partners/solis.png") },
  { name: "LuxPower", logo: assetPath("/partners/luxpower.png") },
  { name: "Floxess", logo: assetPath("/partners/floxess.png") },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="identidad" className="pt-16 sm:pt-20 lg:pt-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="lux-card rounded-[30px] p-6 sm:rounded-[36px] sm:p-8 md:p-10">
              <span className="eyebrow">Dirección técnica</span>
              <h2 className="mt-5 text-4xl text-[color:var(--solarys-deep)] sm:mt-6 sm:text-5xl">
                Ingeniería energética con enfoque en rendimiento real.
              </h2>
              <p className="mt-5 text-base leading-7 text-[color:var(--solarys-ink)]/74 sm:mt-6 sm:text-lg sm:leading-8">
               En Solarys Ingeniería desarrollamos soluciones solares y sistemas electromecánicos diseñados para ofrecer estabilidad, eficiencia y continuidad operativa en cada proyecto.
              </p>

              <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-start gap-3 rounded-[20px] border border-[color:var(--solarys-deep)]/8 bg-[color:var(--solarys-light)] px-4 py-4 sm:rounded-[24px]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--solarys-gold)]" />
                    <p className="text-sm leading-6 text-[color:var(--solarys-ink)]/74">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(36,59,113,0.16)] sm:rounded-[34px]">
                <Image
                  src={assetPath("/projects/demo-4.avif")}
                  alt="Instalación solar a escala industrial"
                  width={900}
                  height={1100}
                  className="h-[320px] w-full object-cover sm:h-[420px] md:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--solarys-deep)]/78 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/82 sm:text-xs sm:tracking-[0.3em]">
                    Soluciones con presencia
                  </p>
                  <p className="mt-2 text-2xl sm:text-3xl">Energía diseñada para funcionar sin interrupciones.</p>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="lux-card rounded-[26px] p-5 sm:rounded-[30px] sm:p-6">
                  <SunMedium className="h-7 w-7 text-[color:var(--solarys-gold)]" />
                  <p className="mt-4 text-2xl text-[color:var(--solarys-deep)] sm:mt-5 sm:text-3xl">
                    Soluciones confiables
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--solarys-ink)]/72">
                    Implementamos sistemas solares y electromecánicos que garantizan rendimiento, ahorro energético y continuidad en cada operación.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[26px] border border-white/70 shadow-[0_24px_70px_rgba(36,59,113,0.14)] sm:rounded-[30px]">
                  <Image
                    src={assetPath("/projects/demo-5.avif")}
                    alt="Proyecto de bombeo solar"
                    width={500}
                    height={500}
                    className="h-[220px] w-full object-cover sm:h-[260px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Servicios />

      <section id="impacto" className="pt-16 sm:pt-20 lg:pt-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr]">
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#243b71_0%,#2d4b8e_48%,#47c3cb_100%)] p-6 text-white shadow-[0_28px_80px_rgba(36,59,113,0.24)] sm:rounded-[38px] sm:p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/80 sm:text-sm sm:tracking-[0.34em]">
                Nuestro enfoque
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl text-white sm:text-5xl">
                No instalamos paneles.
Diseñamos sistemas que garantizan resultados.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:mt-6 sm:text-lg sm:leading-8">
               Cada proyecto está diseñado para generar ahorro, asegurar continuidad operativa y ofrecer un rendimiento confiable a largo plazo.
              </p>

              <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/12 bg-white/8 p-4 sm:rounded-[28px] sm:p-5">
                  <Gauge className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                  <p className="mt-4 text-lg font-semibold">Rendimiento garantizado</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Sistemas diseñados para operar de forma eficiente, estable y duradera.
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/12 bg-white/8 p-4 sm:rounded-[28px] sm:p-5">
                  <Headphones className="h-7 w-7 text-[color:var(--solarys-gold-soft)]" />
                  <p className="mt-4 text-lg font-semibold">Soporte técnico confiable</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Acompañamiento real antes, durante y después de cada instalación.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(36,59,113,0.16)] sm:rounded-[34px]">
                <Image
                  src={assetPath("/projects/demo-6.jpg")}
                  alt="Instalación solar sobre cubierta"
                  width={900}
                  height={700}
                  className="h-[240px] w-full object-cover sm:h-[320px]"
                />
              </div>

              <div className="lux-card rounded-[28px] p-6 sm:rounded-[34px] sm:p-8">
                <span className="eyebrow">Cómo trabajamos</span>
                <h2 className="mt-5 text-4xl text-[color:var(--solarys-deep)] sm:mt-6 sm:text-5xl">
                 Así trabajamos cada proyecto
                </h2>
                <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
                  {process.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[20px] border border-[color:var(--solarys-deep)]/8 bg-white px-4 py-4 sm:gap-4 sm:rounded-[24px] sm:px-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--solarys-deep)] text-sm font-bold text-white">
                        0{index + 1}
                      </div>
                      <p className="text-sm font-semibold tracking-[0.04em] text-[color:var(--solarys-ink)]/78">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="overflow-hidden rounded-[30px] shadow-[0_28px_80px_rgba(36,59,113,0.18)] sm:rounded-[38px]">
              <Image
                src={assetPath("/projects/demo-7.webp")}
                alt="Vista aérea de proyecto productivo con energía solar"
                width={1000}
                height={1200}
                className="h-[300px] w-full object-cover sm:h-[440px] lg:h-full lg:min-h-[520px]"
              />
            </div>

            <div className="lux-card rounded-[30px] p-6 sm:rounded-[38px] sm:p-8 md:p-10">
              <span className="eyebrow">Tecnología y aliados estratégicos</span>
              <h2 className="mt-5 text-4xl text-[color:var(--solarys-deep)] sm:mt-6 sm:text-5xl">
                Trabajamos con tecnología confiable y marcas reconocidas.
              </h2>
              <p className="mt-5 text-base leading-7 text-[color:var(--solarys-ink)]/74 sm:mt-6 sm:text-lg sm:leading-8">
                Integramos equipos y soluciones de fabricantes reconocidos para garantizar rendimiento, durabilidad y estabilidad en cada instalación.
              </p>

              <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-3">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-24 items-center justify-center rounded-[22px] border border-[color:var(--solarys-deep)]/10 bg-white px-4 shadow-sm sm:h-28 sm:rounded-[26px]"
                  >
                    <div className="relative h-14 w-28">
                      <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] bg-[color:var(--solarys-light)] px-6 py-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[color:var(--solarys-gold)]" />
                  <p className="text-base leading-7 text-[color:var(--solarys-ink)]/74">
                    Trabajar con tecnología certificada nos permite ofrecer soluciones más confiables, eficientes y respaldadas por estándares de calidad internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecursosTecnicos />
      <ProyectosDestacados />

      <section className="pb-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="section-shell">
          <div className="overflow-hidden rounded-[30px] bg-[color:var(--solarys-deep)] px-6 py-8 text-white shadow-[0_32px_100px_rgba(36,59,113,0.26)] sm:rounded-[40px] sm:px-8 sm:py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/78 sm:text-sm sm:tracking-[0.34em]">
                  Nos vemos pronto!
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl text-white sm:text-5xl">
                  Lleva tu proyecto energético a otro nivel.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:mt-6 sm:text-lg sm:leading-8">
                  Te ayudamos a diseñar, instalar y optimizar tu sistema con soluciones confiables y acompañamiento técnico real.
                </p>
              </div>

              <div className="lux-card rounded-[28px] bg-white/95 p-6 text-[color:var(--solarys-ink)] sm:rounded-[34px] sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--solarys-primary-deep)] sm:text-sm sm:tracking-[0.3em]">
                  Contacto directo
                </p>
                <p className="mt-4 text-3xl text-[color:var(--solarys-deep)] sm:text-4xl">829-869-3002</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--solarys-ink)]/72 sm:text-base">
                  Solicita tu cotización y llevemos esta nueva imagen a una captación comercial
                  más seria, moderna y visualmente poderosa.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--solarys-gold)] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/50 hover:-translate-y-1 active:scale-95"
                  >
                    Hablar con un asesor
                  </Link>
                  <a
                    href="tel:8298693002"
                    className="inline-flex items-center justify-center rounded-full border border-[color:var(--solarys-deep)]/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] transition-all duration-300 hover:bg-white/10 hover:border-[color:var(--solarys-deep)]/20 active:scale-95"
                  >
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
