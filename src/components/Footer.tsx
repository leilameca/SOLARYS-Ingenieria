"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "../lib/asset-path";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#1ecfc9]/20 bg-[#1ecfc9] text-white">
      <div className="section-shell py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <Link href="/#hero" className="flex items-start gap-4 sm:items-center">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg shadow-cyan-950/20 sm:h-16 sm:w-16">
                <Image
                  src={assetPath("/brand/logo.png")}
                  alt="Logo de SOLARYS Ingenieria"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.34em]">
                  Solarys Ingenieria
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.26em]">
                  Energia solar y bombeo
                </p>
              </div>
            </Link>
            <h2 className="max-w-xl text-3xl text-white sm:text-4xl">
              Soluciones energeticas disenadas con precision tecnica y ejecutadas con estandares profesionales.
            </h2>
            <p className="max-w-xl text-sm leading-[1.8] text-white/90 sm:text-base">
              Integramos sistemas solares, bombeo y soluciones electromecanicas con enfoque en rendimiento, estabilidad y soporte continuo.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white">
              Navegacion
            </p>
            <div className="flex flex-col gap-3 text-white/90">
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/#identidad"
                  className="block leading-[1.8] underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
                >
                  Identidad
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/#servicios"
                  className="block leading-[1.8] underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
                >
                  Servicios
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/proyectos"
                  className="block leading-[1.8] underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
                >
                  Proyectos
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/contacto"
                  className="block leading-[1.8] underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
                >
                  Contacto
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white">
              Contacto
            </p>
            <div className="space-y-3 text-white/90">
              <p className="leading-[1.8]">Republica Dominicana</p>
              <motion.a
                href="tel:8298693002"
                className="block leading-[1.8] underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                829-869-3002
              </motion.a>
              <motion.a
                href="mailto:contacto@solarysingenieria.com"
                className="block leading-[1.8] underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                contacto@solarysingenieria.com
              </motion.a>
              <p className="leading-[1.8]">Soporte tecnico 24/7 para operaciones criticas.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.8rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} SOLARYS Ingenieria. Todos los derechos reservados.</p>
          <p>Energia solar, bombeo y electromecanica con respaldo tecnico real.</p>
        </div>
      </div>
    </footer>
  );
}
