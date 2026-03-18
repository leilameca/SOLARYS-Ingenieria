"use client";

import Link from "next/link";
import MotionSlide from "./MotionSlide";
import { ArrowRight, Droplets, Sun, Zap } from "lucide-react";

const servicios = [
  {
    title: "Energia solar fotovoltaica",
    desc: "Sistemas on-grid, off-grid e hibridos para operaciones que necesitan ahorro, autonomia y una presentacion impecable.",
    href: "/solar",
    badge: "Solar",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    title: "Sistemas de bombeo solar",
    desc: "Ingenieria de bombeo para fincas, agroindustria y entornos remotos con criterio de caudal, altura y continuidad.",
    href: "/bombeo",
    badge: "Bombeo",
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    title: "Electromecanica aplicada",
    desc: "ATS, tableros, bancos de capacitores y mantenimiento industrial para operaciones que no pueden parar.",
    href: "/electromecanica",
    badge: "Electromecanica",
    icon: <Zap className="h-6 w-6" />,
  },
];

export default function Servicios() {
  return (
    <section className="pt-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Unidades de negocio</span>
            <h2 className="mt-6 text-5xl text-[color:var(--solarys-deep)]">
              Servicios con forma premium y fondo tecnico real.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
              Cada unidad se presenta como una solucion empresarial clara, con lenguaje
              mas comercial, mas visual y mejor jerarquia de valor.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--solarys-gold)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--solarys-deep)] shadow-xl shadow-amber-200/60 hover:-translate-y-0.5"
          >
            Solicitar asesoria
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {servicios.map((s, i) => (
            <MotionSlide key={s.title} direction={i % 2 === 0 ? "left" : "right"}>
              <Link
                href={s.href}
                className="lux-card group relative block h-full overflow-hidden rounded-[32px] p-8"
              >
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[color:var(--solarys-primary)]/12 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--solarys-sand)] text-[color:var(--solarys-gold)] shadow-inner">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--solarys-primary-deep)]">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-7 text-3xl text-[color:var(--solarys-deep)]">{s.title}</h3>
                  <p className="mt-4 flex-grow text-base leading-7 text-[color:var(--solarys-ink)]/72">
                    {s.desc}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)]">
                    Ver detalle
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </MotionSlide>
          ))}
        </div>
      </div>
    </section>
  );
}
