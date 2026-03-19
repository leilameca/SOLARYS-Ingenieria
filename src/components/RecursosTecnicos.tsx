"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const recursos = [
  {
    title: "Guía de sistemas solares: on-grid, off-grid e híbridos",
    desc: "Explicación clara de cada sistema, sus ventajas y cuándo utilizar cada uno según tu necesidad.",
    href: "/solar",
    tag: "Solar",
  },
  {
    title: "Guía técnica de bombeo solar",
    desc: "Cómo seleccionar bombas, controladores y sistemas eficientes según caudal, altura y uso.",
    href: "/bombeo",
    tag: "Bombeo",
  },
  {
    title: "Soluciones electromecánicas industriales",
    desc: "Aplicaciones clave en ATS, bancos de capacitores y mantenimiento para operaciones continuas.",
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
                Contenido técnico que informa y genera confianza.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
                Accede a guías claras y prácticas que te ayudan a entender nuestras soluciones y tomar mejores decisiones técnicas.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--solarys-deep)]/10 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] shadow-lg shadow-cyan-100/50 transition-all duration-300 hover:shadow-lg hover:border-[color:var(--solarys-deep)]/20 active:scale-95"
            >
              Consultar con un tecnico
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {recursos.map((r, i) => (
              <motion.article 
                key={r.title} 
                className="lux-card group rounded-[30px] p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
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
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
