"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "../lib/asset-path";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--solarys-deep)]/10 bg-[color:var(--solarys-deep)] text-white">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <div className="flex items-start gap-4 sm:items-center">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg shadow-cyan-950/20 sm:h-16 sm:w-16">
                <Image
                  src={assetPath("/brand/logo.png")}
                  alt="Logo de SOLARYS Ingeniería"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200/80 sm:text-xs sm:tracking-[0.34em]">
                  Solarys Ingeniería
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--solarys-gold-soft)] sm:text-sm sm:tracking-[0.26em]">
                  Energía solar y bombeo
                </p>
              </div>
            </div>
            <h2 className="max-w-xl text-3xl text-white sm:text-4xl">
              Soluciones energéticas diseñadas con precisión técnica y ejecutadas con estándares profesionales.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              Integramos sistemas solares, bombeo y soluciones electromecánicas con enfoque en rendimiento, estabilidad y soporte continuo.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[color:var(--solarys-gold-soft)]">
              Navegación
            </p>
            <div className="flex flex-col gap-3 text-white/75">
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link href="/#identidad" className="block hover:text-white transition-colors duration-300">Identidad</Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link href="/#servicios" className="block hover:text-white transition-colors duration-300">Servicios</Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link href="/proyectos" className="block hover:text-white transition-colors duration-300">Proyectos</Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link href="/contacto" className="block hover:text-white transition-colors duration-300">Contacto</Link>
              </motion.div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[color:var(--solarys-gold-soft)]">
              Contacto
            </p>
            <div className="space-y-3 text-white/75">
              <p>República Dominicana</p>
              <motion.a href="tel:8298693002" className="block hover:text-white transition-colors duration-300" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>829-869-3002</motion.a>
              <motion.a href="mailto:contacto@solarysingenieria.com" className="block hover:text-white transition-colors duration-300" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>contacto@solarysingenieria.com</motion.a>
              <p>Soporte técnico 24/7 para operaciones críticas.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SOLARYS Ingeniería. Todos los derechos reservados.</p>
          <p>Energía solar, bombeo y electromecánica con respaldo técnico real.</p>
        </div>
      </div>
    </footer>
  );
}
