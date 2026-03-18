import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Orbit } from "lucide-react";
import { assetPath } from "../../lib/asset-path";

const partners = [
  {
    name: "Solis",
    logo: assetPath("/partners/solis.png"),
    description:
      "Inversionistas y soluciones fotovoltaicas con reconocimiento internacional para entornos exigentes.",
  },
  {
    name: "LuxPower",
    logo: assetPath("/partners/luxpower.png"),
    description:
      "Arquitecturas hibridas y gestion inteligente de energia para proyectos con foco en flexibilidad.",
  },
  {
    name: "Floxess",
    logo: assetPath("/partners/floxess.png"),
    description:
      "Soporte para componentes y ecosistemas que refuerzan el desempeno integral de la instalacion.",
  },
];

export default function PartnersPage() {
  return (
    <section className="py-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lux-card rounded-[38px] p-8 md:p-10">
            <span className="eyebrow">Partners tecnologicos</span>
            <h1 className="mt-6 text-6xl text-[color:var(--solarys-deep)]">Respaldo global</h1>
            <p className="mt-5 text-lg leading-8 text-[color:var(--solarys-ink)]/72">
              La nueva presentacion de partners deja de verse decorativa y pasa a
              comunicar alianza, estandar y confianza para cerrar mejor frente a clientes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Marcas alineadas con desempeno y confiabilidad.",
                "Portafolio con soporte para sistemas solares e integraciones hibridas.",
                "Argumento comercial mas fuerte para licitaciones y ventas premium.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[24px] bg-[color:var(--solarys-light)] px-4 py-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--solarys-gold)]" />
                  <p className="text-sm leading-6 text-[color:var(--solarys-ink)]/74">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--solarys-gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--solarys-deep)]"
            >
              Hablar con un asesor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[38px] bg-[color:var(--solarys-deep)] p-8 text-white shadow-[0_28px_80px_rgba(36,59,113,0.22)] md:p-10">
            <div className="flex items-center gap-3">
              <Orbit className="h-6 w-6 text-[color:var(--solarys-gold)]" />
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-100/80">
                Ecosistema de marca
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {partners.map((partner) => (
                <article
                  key={partner.name}
                  className="rounded-[30px] border border-white/12 bg-white/8 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white p-2">
                      <Image src={partner.logo} alt={partner.name} fill className="object-contain p-3" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-white">{partner.name}</h2>
                      <p className="mt-2 text-sm leading-6 text-white/70">{partner.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
