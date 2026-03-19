"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { assetPath } from "../lib/asset-path";

const navLinks = [
  { href: "/#identidad", label: "Identidad" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#impacto", label: "Impacto" },
  { href: "/proyectos", label: "Proyectos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--solarys-deep)]/10 bg-white/88 backdrop-blur-xl">
      <div className="section-shell">
        <nav className="flex items-center justify-between gap-3 px-0 py-3 text-[color:var(--solarys-ink)] sm:px-1 md:px-0 md:py-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg shadow-cyan-100/60 ring-1 ring-cyan-100 sm:h-12 sm:w-12">
              <Image
                src={assetPath("/brand/logo.png")}
                alt="SOLARYS Ingenieria"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>

            <div className="min-w-0 leading-none">
              <p className="truncate text-base font-bold tracking-[0.08em] text-[color:var(--solarys-deep)] sm:text-xl sm:tracking-[0.18em]">
                SOLARYS
              </p>
              <p className="mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-[color:var(--solarys-gold)] sm:text-xs sm:tracking-[0.34em]">
                Ingeniería
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[color:var(--solarys-ink)]/72 hover:text-[color:var(--solarys-deep)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:8298693002"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--solarys-deep)]/10 bg-white px-4 py-2 text-sm font-semibold text-[color:var(--solarys-deep)] shadow-sm"
            >
              <PhoneCall className="h-4 w-4 text-[color:var(--solarys-gold)]" />
              829-869-3002
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full bg-[color:var(--solarys-gold)] px-5 py-3 text-sm font-bold text-[color:var(--solarys-deep)] shadow-lg shadow-amber-200/70 hover:-translate-y-0.5 hover:bg-[color:var(--solarys-gold-soft)]"
            >
              Solicitar cotización
            </Link>
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--solarys-deep)]/10 bg-white text-[color:var(--solarys-deep)] lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="mb-3 rounded-[28px] border border-[color:var(--solarys-deep)]/10 bg-white px-4 py-4 shadow-[0_18px_50px_rgba(36,59,113,0.08)] lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-[color:var(--solarys-ink)]/80 hover:bg-[color:var(--solarys-light)]"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:8298693002"
                className="mt-2 rounded-2xl border border-[color:var(--solarys-deep)]/10 px-4 py-3 text-sm font-semibold text-[color:var(--solarys-deep)]"
              >
                Llamar ahora: 829-869-3002
              </a>

              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-[color:var(--solarys-gold)] px-4 py-3 text-center text-sm font-bold text-[color:var(--solarys-deep)]"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
