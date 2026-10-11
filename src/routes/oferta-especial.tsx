import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/oferta-especial")({ component: OfertaEspecial });

const BASIC_CHECKOUT_URL = "https://pay.hotmart.com/B107921531Y?off=oba9nu0s&checkoutMode=10";
const PROMO_CHECKOUT_URL = "https://pay.hotmart.com/B107921531Y?off=d9hnft5h&checkoutMode=10";

function checkoutUrl(base: string) {
  if (typeof window === "undefined") return base;
  const destination = new URL(base);
  const current = new URLSearchParams(window.location.search);
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "src", "sck"].forEach((key) => {
    const value = current.get(key);
    if (value) destination.searchParams.set(key, value);
  });
  return destination.toString();
}

function track(eventName: string, value: number, id: string) {
  if (typeof window === "undefined") return;
  const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (!fbq) return;
  const eventID = typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${eventName}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  fbq("track", eventName, {
    content_name: "Formación en Mecánica Automotriz",
    content_ids: [id], content_type: "product", currency: "USD", value, num_items: 1,
  }, { eventID });
}

function OfertaEspecial() {
  useEffect(() => {
    track("ViewContent", 9, "mecanica-automotriz-oferta-especial");
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 text-center">
          <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-amber-300">Oferta exclusiva antes de finalizar tu compra</span>
          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">¡Espera! Mejora tu formación por solo <span className="text-emerald-400">US$4 más</span></h1>
          <p className="mt-4 text-slate-300">Elegiste el Plan Básico de US$5. Por esta oferta especial puedes llevarte el Plan Profesional completo por solo US$9.</p>
        </div>
        <div className="rounded-3xl border-2 border-emerald-400 bg-slate-900 p-6 shadow-[0_20px_70px_rgba(16,185,129,.12)] sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <div><p className="text-xs font-black uppercase tracking-widest text-emerald-400">Oferta de mejora</p><h2 className="mt-1 text-2xl font-black">Plan Profesional</h2></div>
            <span className="rounded-full bg-amber-400 px-3 py-2 text-xs font-black text-slate-950">31% OFF</span>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <span className="pb-1 text-2xl font-bold text-slate-400 line-through">US$13</span>
            <span className="text-6xl font-black text-emerald-400">US$9</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-slate-300">Pagas US$9 en total, no US$5 + US$9.</p>
          <div className="mt-6 space-y-3">
            {["Más de 80 clases en video", "Certificado de finalización", "Acceso de por vida", "Materiales de apoyo y manuales", "10 bonos técnicos"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-semibold"><Check className="h-5 w-5 shrink-0 text-emerald-400"/><span>{item}</span></div>
            ))}
          </div>
          {PROMO_CHECKOUT_URL ? (
            <a href={checkoutUrl(PROMO_CHECKOUT_URL)}
              onClick={() => track("InitiateCheckout", 9, "mecanica-automotriz-profesional-oferta")}
              className="mt-8 flex min-h-14 w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-4 text-center text-sm font-black text-white transition hover:bg-emerald-400">
              SÍ, QUIERO APROVECHAR LA OFERTA POR US$9
            </a>
          ) : (
            <div role="status" className="mt-8 rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-center text-sm font-bold text-amber-200">
              Oferta de US$9 pendiente de activar: falta configurar el enlace de pago correspondiente.
            </div>
          )}
          <a href={checkoutUrl(BASIC_CHECKOUT_URL)}
            onClick={() => track("InitiateCheckout", 5, "mecanica-automotriz-basico")}
            className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-center text-sm font-semibold text-slate-300 hover:bg-white/5">
            No, gracias. Prefiero continuar con el Plan Básico de US$5.
          </a>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400"><ShieldCheck className="h-4 w-4"/> Pago seguro • Garantía de 7 días</p>
        </div>
        <a href="/" className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-white"><ArrowLeft className="h-4 w-4"/> Volver y comparar los planes</a>
      </div>
    </main>
  );
}
