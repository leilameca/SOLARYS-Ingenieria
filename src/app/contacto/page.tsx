import ContactForm from "../../components/ContactForm";

export default function ContactoPage() {
  return (
    <section className="section-shell py-10 sm:py-14 md:py-16">
      <div className="grid items-start gap-8 md:gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">
            Contacto técnico
          </p>
          <h1 className="mt-5 text-4xl text-[color:var(--solarys-deep)] sm:mt-6 sm:text-5xl">
            SOLARYS Ingeniería
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--solarys-ink)]/74 sm:mt-5 sm:text-lg sm:leading-8">
            Envíanos tu necesidad y preparamos una respuesta técnica alineada con el tipo
            de proyecto: solar fotovoltaica, bombeo solar o electromecánica aplicada.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[color:var(--solarys-ink)]/75">
            <div className="lux-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6">
              <p className="font-semibold text-[color:var(--solarys-deep)]">WhatsApp</p>
              <p className="mt-1 text-base text-[color:var(--solarys-ink)]">+1 829-869-3002</p>
              <p className="mt-1 text-xs text-[color:var(--solarys-ink)]/55">
                Horario de respuesta comercial: 8:00 AM - 6:00 PM
              </p>
            </div>

            <div className="lux-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6">
              <p className="font-semibold text-[color:var(--solarys-deep)]">Correo</p>
              <p className="mt-1 text-base text-[color:var(--solarys-ink)]">
                contacto@solarysingenieria.com
              </p>
            </div>

            <div className="lux-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6">
              <p className="font-semibold text-[color:var(--solarys-deep)]">Ubicación</p>
              <p className="mt-1 text-base text-[color:var(--solarys-ink)]">República Dominicana</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/70 bg-[color:var(--solarys-light)] p-5 shadow-[0_20px_60px_rgba(36,59,113,0.08)] sm:rounded-[32px] sm:p-6 md:p-8">
          <h2 className="text-2xl text-[color:var(--solarys-deep)]">
            Formulario de contacto
          </h2>
          <p className="mt-2 text-sm leading-6 text-[color:var(--solarys-ink)]/64">
            Completa los datos y un técnico de SOLARYS te responderá con seguimiento directo.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
