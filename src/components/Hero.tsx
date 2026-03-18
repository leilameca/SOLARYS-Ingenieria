"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Droplets, SunMedium, Wrench } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const badges = [
  { label: "Energía solar", icon: SunMedium },
  { label: "Bombeo solar", icon: Droplets },
  { label: "Soporte técnico", icon: Wrench },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[color:var(--solarys-deep)]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,32,60,0.92)_0%,rgba(18,32,60,0.74)_42%,rgba(18,32,60,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(71,195,203,0.34),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(245,171,50,0.18),transparent_22%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-32 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full items-end gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10"
        >
          <div className="max-w-4xl">
            <motion.span
              variants={itemVariants}
              className="eyebrow border-white/14 bg-white/8 text-white before:bg-[linear-gradient(135deg,#ffd38a,#47c3cb)]"
            >
              Ingeniería energética premium
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-5xl text-[clamp(3.2rem,14vw,8rem)] leading-[0.9] tracking-[-0.065em] text-white sm:mt-8"
            >
              Energía que
              <br />
              transforma tu mundo
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
            >
              SOLARYS Ingeniería diseña soluciones solares, sistemas de bombeo y
              respaldo electromecánico con una ejecución técnica impecable, imagen
              corporativa sólida y soporte confiable.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              {badges.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/84 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  <Icon className="h-4 w-4 text-[color:var(--solarys-gold-soft)]" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--solarys-gold)] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)] shadow-xl shadow-amber-200/40 hover:-translate-y-0.5 hover:bg-[color:var(--solarys-gold-soft)] sm:px-7 sm:text-sm sm:tracking-[0.18em]"
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/12 sm:px-7 sm:text-sm sm:tracking-[0.18em]"
              >
                Ver proyectos
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 grid max-w-3xl gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-3">
              {[
                { value: "25+", label: "años de vida útil proyectada" },
                { value: "0", label: "emisión de CO₂ en operación" },
                { value: "24/7", label: "respuesta técnica para incidencias" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md sm:rounded-[28px] sm:px-5 sm:py-5"
                >
                  <p className="text-2xl font-bold text-[color:var(--solarys-gold-soft)] sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/72 sm:text-sm">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex justify-start lg:justify-end lg:pb-4">
            <div className="w-full max-w-[360px] rounded-[28px] border border-white/14 bg-white/10 p-5 text-white shadow-[0_24px_80px_rgba(18,32,60,0.24)] backdrop-blur-md sm:rounded-[34px] sm:p-6">
              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white/90 sm:h-16 sm:w-16">
                  <Image
                    src="/brand/logo.png"
                    alt="Logo de SOLARYS Ingeniería"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/82 sm:text-xs sm:tracking-[0.28em]">
                    SOLARYS Ingeniería
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Energía solar y bombeo con una presencia más alta.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/72 sm:mt-5 sm:leading-7">
                Quitamos el collage de imágenes del hero para dejar una experiencia más
                limpia, elegante y cinematográfica, apoyada en el video completo de marca.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
