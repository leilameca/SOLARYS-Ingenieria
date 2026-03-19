import Link from "next/link";

export default function WhatsAppButton() {
  const phone = "18298693002";
  const text = encodeURIComponent(
    "Hola, deseo una cotizacion para un proyecto de energia solar o bombeo con SOLARYS Ingenieria."
  );

  return (
    <Link
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#25D366] shadow-xl shadow-emerald-500/30 hover:scale-105 hover:shadow-2xl sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white sm:h-7 sm:w-7"
      >
        <path d="M16.002 3C9.372 3 4 8.373 4 15.003c0 2.646.865 5.084 2.327 7.066L4 29l7.137-2.272A11.96 11.96 0 0016.002 27c6.63 0 12.002-5.373 12.002-11.997C28.004 8.373 22.632 3 16.002 3zm0 21.9a9.9 9.9 0 01-5.04-1.387l-.36-.212-4.234 1.348 1.382-4.123-.234-.373A9.9 9.9 0 016.1 15.003c0-5.457 4.445-9.903 9.902-9.903s9.902 4.446 9.902 9.903-4.445 9.897-9.902 9.897zm5.43-7.416c-.297-.149-1.756-.867-2.03-.966-.274-.099-.474-.149-.673.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.253-.461-2.387-1.47-.882-.786-1.478-1.756-1.651-2.053-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.673-1.62-.922-2.221-.242-.579-.487-.5-.673-.51l-.574-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.015-1.04 2.476 0 1.461 1.065 2.872 1.213 3.071.149.198 2.097 3.204 5.08 4.492.71.307 1.263.49 1.695.627.712.226 1.36.194 1.872.118.571-.085 1.756-.718 2.004-1.412.248-.694.248-1.29.173-1.412-.074-.124-.272-.198-.57-.347z"/>
      </svg>
    </Link>
  );
}
