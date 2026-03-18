"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const SCRIPT_URL = "tu_google_script_url";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      nombre: String(form.get("nombre") || ""),
      empresa: String(form.get("empresa") || ""),
      telefono: String(form.get("telefono") || ""),
      tipoProyecto: String(form.get("tipoProyecto") || ""),
      mensaje: String(form.get("mensaje") || ""),
    };

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error");

      setOk("¡Solicitud recibida! Un ingeniero revisará tu caso y te contactará pronto.");
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Hubo un problema. Intenta por WhatsApp o revisa tu conexión.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-200/40 sm:rounded-[2.5rem] sm:p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-widest">Nombre completo</label>
            <input
              name="nombre"
              required
              type="text"
              className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none focus:border-[#FACC15] focus:bg-white sm:px-5 sm:py-4"
              placeholder="Ej. Ing. Carlos Matos"
            />
          </div>

          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-widest">Empresa / Institución</label>
            <input
              name="empresa"
              type="text"
              className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none focus:border-[#FACC15] focus:bg-white sm:px-5 sm:py-4"
              placeholder="Ej. Agropecuaria del Norte"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-widest">Teléfono directo</label>
            <input
              name="telefono"
              required
              type="tel"
              className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none focus:border-[#FACC15] focus:bg-white sm:px-5 sm:py-4"
              placeholder="809-000-0000"
            />
          </div>

          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-widest">Especialidad requerida</label>
            <select
              name="tipoProyecto"
              className="w-full appearance-none rounded-2xl border-2 border-slate-50 bg-slate-50 px-4 py-3.5 text-sm font-bold text-slate-700 outline-none focus:border-[#FACC15] focus:bg-white sm:px-5 sm:py-4"
            >
              <option>Solar Fotovoltaica</option>
              <option>Bombeo Solar</option>
              <option>Electromecánica / ATS</option>
              <option>Mantenimiento Industrial</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-widest">Detalles de la necesidad técnica</label>
          <textarea
            name="mensaje"
            required
            rows={4}
            className="w-full resize-none rounded-2xl border-2 border-slate-50 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none focus:border-[#FACC15] focus:bg-white sm:px-5 sm:py-4"
            placeholder="Describa brevemente la carga, ubicación o problema técnico a resolver..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0F172A] py-4 text-xs font-black uppercase tracking-[0.16em] text-[#FACC15] shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 disabled:opacity-60 sm:py-5 sm:text-sm sm:tracking-[0.2em]"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Iniciar Consulta Técnica
            </>
          )}
        </button>

        {/* Mensajes de Estado */}
        {ok && (
          <div className="animate-appearance-in flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-4 text-green-700">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <p className="text-sm font-bold">{ok}</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 text-red-700 border border-red-100">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-bold">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
}
